export const META_PIXEL_ID = "1336012038696716";

type MetaPixelEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    fbq?: (
      command: "track" | "trackCustom",
      eventName: string,
      params?: MetaPixelEventParams
    ) => void;
  }
}

export function trackMetaEvent(eventName: string, params?: MetaPixelEventParams) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("trackCustom", eventName, params);
}

export function trackMetaStandardEvent(eventName: string, params?: MetaPixelEventParams) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", eventName, params);
}

export function trackLead(source: string, params?: MetaPixelEventParams) {
  trackMetaStandardEvent("Lead", {
    content_name: source,
    ...params,
  });
}
