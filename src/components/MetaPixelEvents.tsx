"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  trackGAEvent,
  trackMetaEvent,
  trackMetaStandardEvent,
  trackRedditEvent,
} from "@/lib/meta-pixel";

function getClickLabel(element: Element) {
  return (
    element.getAttribute("aria-label") ||
    element.textContent?.replace(/\s+/g, " ").trim().slice(0, 100) ||
    "Unlabelled action"
  );
}

function getClickType(element: Element) {
  const link = element.closest("a");
  const href = link?.getAttribute("href") || "";

  if (href.startsWith("tel:")) return "phone";
  if (href.startsWith("mailto:")) return "email";
  if (href.startsWith("#")) return "page_anchor";
  if (href.startsWith("/quiz")) return "quiz";
  if (href.startsWith("/free-website-audit")) return "free_audit";
  if (href.startsWith("/contact")) return "contact";
  if (href.startsWith("/blog")) return "blog";
  if (href.startsWith("/services")) return "service_page";
  if (href.startsWith("/locations")) return "location_page";
  if (href.startsWith("http")) {
    try {
      return new URL(href).hostname === window.location.hostname ? "internal" : "outbound";
    } catch {
      return "outbound";
    }
  }

  const button = element.closest("button");
  if (button?.getAttribute("type") === "submit") return "form_submit_button";
  if (button) return "button";

  return "click";
}

function getFormName(form: HTMLFormElement) {
  const subject = form.querySelector<HTMLInputElement>('input[name="_subject"]')?.value;
  if (subject) return subject.slice(0, 100);

  const article = form.querySelector<HTMLInputElement>('input[name="article"]')?.value;
  if (article) return `Article form: ${article}`;

  return form.getAttribute("aria-label") || form.id || "Website form";
}

function trackFunnelEvent(eventName: string, params: Record<string, string | number | boolean | undefined>) {
  trackMetaEvent(eventName, params);
  trackGAEvent(eventName.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`).replace(/^_/, ""), params);
  trackRedditEvent(eventName, params);
}

function getPageMeta() {
  return {
    page_path: window.location.pathname,
    page_location: window.location.href,
    page_title: document.title,
  };
}

function getScrollPercent() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollable <= 0) return 100;
  return Math.round((window.scrollY / scrollable) * 100);
}

export function MetaPixelEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastClick = useRef({ signature: "", timestamp: 0 });

  useEffect(() => {
    trackGAEvent("page_view", getPageMeta());
    trackMetaStandardEvent("PageView");
    trackRedditEvent("PageVisit", getPageMeta());
  }, [pathname, searchParams]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const clickable = event.target.closest("a,button");
      if (!clickable) return;

      const link = clickable.closest("a");
      const href = link?.getAttribute("href") || undefined;
      const destination = link instanceof HTMLAnchorElement ? link.href : href;
      const clickType = getClickType(clickable);
      const payload = {
        action_label: getClickLabel(clickable),
        action_url: destination,
        click_type: clickType,
        ...getPageMeta(),
      };
      const signature = `${payload.page_path}|${payload.click_type}|${payload.action_label}|${payload.action_url || ""}`;
      const now = Date.now();

      if (lastClick.current.signature === signature && now - lastClick.current.timestamp < 500) {
        return;
      }

      lastClick.current = { signature, timestamp: now };

      trackFunnelEvent("BuildSparkActionClick", payload);

      if (clickType === "phone") {
        trackMetaStandardEvent("Contact", payload);
        trackGAEvent("contact", payload);
      }
    }

    const startedForms = new WeakSet<HTMLFormElement>();

    function handleFormFocus(event: FocusEvent) {
      const form = event.target instanceof Element ? event.target.closest("form") : null;
      if (!(form instanceof HTMLFormElement) || startedForms.has(form)) return;
      startedForms.add(form);

      trackFunnelEvent("BuildSparkFormStarted", {
        form_name: getFormName(form),
        form_action: form.action,
        ...getPageMeta(),
      });
    }

    function handleSubmit(event: SubmitEvent) {
      const form = event.target instanceof HTMLFormElement ? event.target : null;
      if (!form) return;

      trackFunnelEvent("BuildSparkFormSubmitStarted", {
        form_name: getFormName(form),
        form_action: form.action,
        ...getPageMeta(),
      });
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("focusin", handleFormFocus);
    document.addEventListener("submit", handleSubmit);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("focusin", handleFormFocus);
      document.removeEventListener("submit", handleSubmit);
    };
  }, []);

  useEffect(() => {
    const firedDepths = new Set<number>();
    const depths = [25, 50, 75, 90];

    function handleScroll() {
      const currentPercent = getScrollPercent();
      for (const depth of depths) {
        if (currentPercent >= depth && !firedDepths.has(depth)) {
          firedDepths.add(depth);
          trackFunnelEvent("BuildSparkScrollDepth", {
            scroll_depth: depth,
            ...getPageMeta(),
          });
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, searchParams]);

  useEffect(() => {
    const timers = [30, 60].map((seconds) =>
      window.setTimeout(() => {
        trackFunnelEvent("BuildSparkEngagedVisit", {
          engagement_seconds: seconds,
          ...getPageMeta(),
        });
      }, seconds * 1000)
    );

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [pathname, searchParams]);

  return null;
}
