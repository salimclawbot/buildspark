"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackMetaEvent, trackMetaStandardEvent } from "@/lib/meta-pixel";

function getClickLabel(element: Element) {
  return element.textContent?.replace(/\s+/g, " ").trim().slice(0, 100) || element.getAttribute("aria-label") || "Unlabelled action";
}

function shouldTrackClick(element: Element) {
  const link = element.closest("a");
  if (link) {
    const href = link.getAttribute("href") || "";
    return (
      href.startsWith("/quiz") ||
      href.startsWith("/contact") ||
      href.startsWith("/free-website-audit") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:")
    );
  }

  const button = element.closest("button");
  if (!button) return false;

  const label = getClickLabel(button).toLowerCase();
  return (
    button.getAttribute("type") === "submit" ||
    label.includes("quiz") ||
    label.includes("quote") ||
    label.includes("audit") ||
    label.includes("submit") ||
    label.includes("send") ||
    label.includes("spot")
  );
}

export function MetaPixelEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    trackMetaStandardEvent("PageView");
  }, [pathname, searchParams]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element) || !shouldTrackClick(event.target)) return;

      const clickable = event.target.closest("a,button");
      if (!clickable) return;

      trackMetaEvent("BuildSparkActionClick", {
        action_label: getClickLabel(clickable),
        action_url: clickable instanceof HTMLAnchorElement ? clickable.href : undefined,
        page_path: window.location.pathname,
      });
    }

    function handleSubmit(event: SubmitEvent) {
      const form = event.target instanceof HTMLFormElement ? event.target : null;
      if (!form) return;

      trackMetaEvent("BuildSparkFormSubmitStarted", {
        form_action: form.action,
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return null;
}
