export const META_PIXEL_ID = "1336012038696716";
export const REDDIT_PIXEL_ID = "a2_i11htii50f2v";

type MetaPixelEventParams = Record<string, string | number | boolean | undefined>;
type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    fbq?: (
      command: "track" | "trackCustom",
      eventName: string,
      params?: MetaPixelEventParams
    ) => void;
    gtag?: (
      command: "event",
      eventName: string,
      params?: AnalyticsEventParams
    ) => void;
    rdt?: {
      (
        command: "init",
        pixelId: string,
        params?: {
          email?: string;
          phoneNumber?: string;
          externalId?: string;
          idfa?: string;
          aaid?: string;
        }
      ): void;
      (command: "track", eventName: string, params?: MetaPixelEventParams): void;
    };
  }
}

function cleanParams(params?: AnalyticsEventParams) {
  if (!params) return undefined;

  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== "")
  ) as AnalyticsEventParams;
}

export function trackGAEvent(eventName: string, params?: AnalyticsEventParams) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, cleanParams(params));
}

export function trackMetaEvent(eventName: string, params?: MetaPixelEventParams) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("trackCustom", eventName, cleanParams(params));
}

export function trackMetaStandardEvent(eventName: string, params?: MetaPixelEventParams) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", eventName, cleanParams(params));
}

export function trackRedditEvent(eventName: string, params?: MetaPixelEventParams) {
  if (typeof window === "undefined" || !window.rdt) return;
  window.rdt("track", eventName, cleanParams(params));
}

export function trackLead(source: string, params?: MetaPixelEventParams) {
  const payload = {
    content_name: source,
    lead_source: source,
    ...params,
  };

  trackMetaStandardEvent("Lead", {
    ...payload,
  });
  trackGAEvent("generate_lead", {
    currency: "AUD",
    value: 1,
    ...payload,
  });
  trackRedditEvent("Lead", payload);
}
