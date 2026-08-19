export const META_PIXEL_ID = "1336012038696716";
export const REDDIT_PIXEL_ID = "a2_i11htii50f2v";
export const GOOGLE_ADS_LEAD_CONVERSION_ID = "AW-18397739421/yq_SCJCug-QcEJ3z3MRE";

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

function retryWhenPixelReady(send: () => boolean, attempt = 0) {
  if (typeof window === "undefined") return;
  if (send()) return;
  if (attempt >= 20) return;

  window.setTimeout(() => retryWhenPixelReady(send, attempt + 1), 250);
}

export function trackGAEvent(eventName: string, params?: AnalyticsEventParams) {
  retryWhenPixelReady(() => {
    if (!window.gtag) return false;
    window.gtag("event", eventName, cleanParams(params));
    return true;
  });
}

export function trackGoogleAdsLeadConversion(params?: AnalyticsEventParams) {
  trackGAEvent("conversion", {
    send_to: GOOGLE_ADS_LEAD_CONVERSION_ID,
    value: 1.0,
    currency: "AUD",
    ...params,
  });
}

export function trackMetaEvent(eventName: string, params?: MetaPixelEventParams) {
  retryWhenPixelReady(() => {
    if (!window.fbq) return false;
    window.fbq("trackCustom", eventName, cleanParams(params));
    return true;
  });
}

export function trackMetaStandardEvent(eventName: string, params?: MetaPixelEventParams) {
  retryWhenPixelReady(() => {
    if (!window.fbq) return false;
    window.fbq("track", eventName, cleanParams(params));
    return true;
  });
}

export function trackRedditEvent(eventName: string, params?: MetaPixelEventParams) {
  retryWhenPixelReady(() => {
    if (!window.rdt) return false;
    window.rdt("track", eventName, cleanParams(params));
    return true;
  });
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
  trackGoogleAdsLeadConversion(payload);
  trackRedditEvent("Lead", payload);
}

export function trackQuizEvent(
  eventName: "quiz_started" | "quiz_step_viewed" | "quiz_step_completed" | "quiz_plan_selected" | "quiz_completed",
  params: AnalyticsEventParams
) {
  const payload = {
    event_category: "quiz",
    ...params,
  };

  trackGAEvent(eventName, payload);
  trackMetaEvent(eventName, payload);
  trackRedditEvent(eventName, payload);
}
