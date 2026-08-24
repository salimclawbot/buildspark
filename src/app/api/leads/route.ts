import { NextResponse } from "next/server";

type LeadPayload = {
  source?: string;
  businessName?: string;
  websiteOrInstagram?: string;
  firstName?: string;
  email?: string;
  mobile?: string;
  helpNeeded?: string[];
  challenge?: string;
  businessType?: string;
  suburb?: string;
  notes?: string;
  utm?: Record<string, string>;
  gclid?: string;
  landingPageVariant?: string;
  referrer?: string;
  honeypot?: string;
};

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (cleanString(payload.honeypot)) {
    return NextResponse.json({ ok: true });
  }

  const businessName = cleanString(payload.businessName);
  const websiteOrInstagram = cleanString(payload.websiteOrInstagram);
  const firstName = cleanString(payload.firstName);
  const email = cleanString(payload.email);
  const mobile = cleanString(payload.mobile);

  if (!businessName || !websiteOrInstagram || !firstName || !mobile || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Missing required lead fields" },
      { status: 422 }
    );
  }

  const lead = {
    receivedAt: new Date().toISOString(),
    source: payload.source || "hospitality_marketing_landing_page",
    businessName,
    websiteOrInstagram,
    firstName,
    email,
    mobile,
    helpNeeded: Array.isArray(payload.helpNeeded) ? payload.helpNeeded : [],
    challenge: cleanString(payload.challenge),
    businessType: cleanString(payload.businessType),
    suburb: cleanString(payload.suburb),
    notes: cleanString(payload.notes),
    utm: payload.utm || {},
    gclid: cleanString(payload.gclid),
    landingPageVariant: cleanString(payload.landingPageVariant),
    referrer: cleanString(payload.referrer),
  };

  if (process.env.NODE_ENV !== "production") {
    console.info("[lead:hospitality-marketing]", lead);
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (error) {
      console.error("[lead:webhook:error]", error);
    }
  }

  return NextResponse.json({ ok: true });
}
