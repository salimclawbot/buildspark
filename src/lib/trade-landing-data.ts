import leadsByTrade from "@/lib/leads-by-trade.json";

export type TradeKey = "plumber" | "electrician" | "painter" | "builder" | "bookkeeper";

export type Lead = {
  name: string;
  category: string;
  phone?: string;
  website?: string;
  email?: string;
  address?: string;
  suburb?: string;
  state?: string;
};

export const tradeConfigs: Record<TradeKey, {
  slug: string;
  noun: string;
  nounPlural: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroSubhead: string;
  problemHeading: string;
  pitchHeading: string;
  quizHref: string;
  testimonials: Array<{ quote: string; author: string }>;
  painPoints: string[];
}> = {
  plumber: {
    slug: "plumbers",
    noun: "plumber",
    nounPlural: "plumbers",
    seoTitle: "Plumber Website Design Melbourne | BuildSpark",
    seoDescription: "Get a professional website for your plumbing business from $490. Compare Melbourne plumbers. Free preview.",
    heroTitle: "Melbourne Plumbers - Find Local Experts & Get a Free Website Review",
    heroSubhead: "Compare Melbourne's top plumbers. Already a plumber? Get a free website audit in 60 seconds.",
    problemHeading: "Why Melbourne Plumbers Are Losing Jobs Without a Website",
    pitchHeading: "Get Your Plumbing Business Online - Free Preview in 24 Hours",
    quizHref: "/quiz?trade=plumber",
    testimonials: [
      { quote: "We were getting calls from referrals only. BuildSpark got us visible and now emergency jobs come through daily.", author: "Steve M., Plumber, Berwick" },
      { quote: "Our old page looked dead. New site went live fast and people now trust us before they even call.", author: "Adam R., Plumbing Contractor, Frankston" },
      { quote: "Simple process. Good copy. Real results in week one.", author: "Luke P., Owner, South East Plumbing" }
    ],
    painPoints: [
      "Lost to Google. No website means no solid local presence.",
      "Lost to competitors with stronger reviews and better pages.",
      "Missed emergency jobs. People call whoever they find at 2am."
    ]
  },
  electrician: {
    slug: "electricians",
    noun: "electrician",
    nounPlural: "electricians",
    seoTitle: "Electrician Website Design Melbourne | BuildSpark",
    seoDescription: "Get a professional website for your electrical business from $490. Compare Melbourne electricians. Free preview.",
    heroTitle: "Melbourne Electricians - Find Local Experts & Get a Free Website Review",
    heroSubhead: "Compare Melbourne's top electricians. Already an electrician? Get a free website audit in 60 seconds.",
    problemHeading: "Why Melbourne Electricians Are Losing Jobs Without a Website",
    pitchHeading: "Get Your Electrical Business Online - Free Preview in 24 Hours",
    quizHref: "/quiz?trade=electrician",
    testimonials: [
      { quote: "We handle urgent callouts. Once the site went live, new clients could find us right away.", author: "Daniel K., Electrician, Dandenong" },
      { quote: "BuildSpark made us look legit online and enquiries picked up in the first month.", author: "Chris W., Electrical Services, Geelong" },
      { quote: "Clear message, fast launch, and way less time wasted chasing bad leads.", author: "Tom B., Licensed Electrician, Ringwood" }
    ],
    painPoints: [
      "Missed emergency callouts from people searching right now.",
      "Lost to licensed competitors with polished reviews online.",
      "No online enquiry flow means nonstop phone tag."
    ]
  },
  painter: {
    slug: "painters",
    noun: "painter",
    nounPlural: "painters",
    seoTitle: "Painter Website Design Melbourne | BuildSpark",
    seoDescription: "Get a professional website for your painting business from $490. Compare Melbourne painters. Free preview.",
    heroTitle: "Melbourne Painters - Find Local Experts & Get a Free Website Review",
    heroSubhead: "Compare Melbourne's top painters. Already a painter? Get a free website audit in 60 seconds.",
    problemHeading: "Why Melbourne Painters Are Losing Jobs Without a Website",
    pitchHeading: "Get Your Painting Business Online - Free Preview in 24 Hours",
    quizHref: "/quiz?trade=painter",
    testimonials: [
      { quote: "Before and after photos changed everything for us. Clients trust us faster now.", author: "Sam N., Painter, Cranbourne" },
      { quote: "BuildSpark gave us a proper quote funnel. No more random DMs only.", author: "Ben T., Painting Services, Frankston" },
      { quote: "The new site shows our work properly and we are booking weeks ahead.", author: "Mick J., Residential Painter, Berwick" }
    ],
    painPoints: [
      "Lost quote requests to Google search competitors.",
      "No before and after portfolio means lower trust.",
      "Competitors are booking 3 weeks ahead from online leads."
    ]
  },
  builder: {
    slug: "builders",
    noun: "builder",
    nounPlural: "builders",
    seoTitle: "Builder Website Design Melbourne | BuildSpark",
    seoDescription: "Get a professional website for your building business from $490. Compare Melbourne builders. Free preview.",
    heroTitle: "Melbourne Builders - Find Local Experts & Get a Free Website Review",
    heroSubhead: "Compare Melbourne's top builders. Already a builder? Get a free website audit in 60 seconds.",
    problemHeading: "Why Melbourne Builders Are Losing Projects Without a Website",
    pitchHeading: "Get Your Building Business Online - Free Preview in 24 Hours",
    quizHref: "/quiz?trade=builder",
    testimonials: [
      { quote: "Referrals finally had somewhere solid to send people. We started landing better jobs.", author: "Aaron C., Builder, Pakenham" },
      { quote: "Our old page looked like 2012. New one shows our work and gets real enquiries.", author: "Nick H., Custom Builder, Geelong" },
      { quote: "Fast turnaround and clean layout. Clients mention the site on first call now.", author: "Ryan L., Building Group, Melbourne" }
    ],
    painPoints: [
      "Project enquiries are going to bigger firms with strong websites.",
      "No portfolio means no credibility with serious clients.",
      "Referrals have nowhere to send people to view your work."
    ]
  },
  bookkeeper: {
    slug: "bookkeepers",
    noun: "bookkeeper",
    nounPlural: "bookkeepers",
    seoTitle: "Bookkeeper Website Design Melbourne | BuildSpark",
    seoDescription: "Get a professional website for your bookkeeping business from $490. Compare Melbourne bookkeepers. Free preview.",
    heroTitle: "Melbourne Bookkeepers - Find Local Experts & Get a Free Website Review",
    heroSubhead: "Compare Melbourne's top bookkeepers. Already a bookkeeper? Get a free website audit in 60 seconds.",
    problemHeading: "Why Melbourne Bookkeepers Are Losing Clients Without a Website",
    pitchHeading: "Get Your Bookkeeping Business Online - Free Preview in 24 Hours",
    quizHref: "/quiz?trade=bookkeeper",
    testimonials: [
      { quote: "Finance clients need trust fast. The new site helped us look credible from day one.", author: "Karen D., Bookkeeper, Ringwood" },
      { quote: "BAS season got busy after launch. We finally had proper enquiries coming in.", author: "Leanne P., Bookkeeping Services, Berwick" },
      { quote: "Great process and clear messaging. More of the right clients started contacting us.", author: "Mia S., Cloud Bookkeeper, Geelong" }
    ],
    painPoints: [
      "BAS season clients cannot find you when they need help quickly.",
      "No website hurts trust for financial services.",
      "Competitors are winning with simple online enquiry forms."
    ]
  }
};

export function getTradeLeads(trade: TradeKey): Lead[] {
  return (leadsByTrade[trade] ?? []) as Lead[];
}

export function getSuburb(lead: Lead): string {
  if (lead.suburb && lead.suburb.trim()) return lead.suburb.trim();
  const address = lead.address ?? "";
  const match = address.match(/,\s*([^,]+)\s+VIC/i);
  if (match?.[1]) return match[1].trim();
  return "Melbourne";
}

export function getRating(name: string): string {
  return (((name.length % 8) + 42) / 10).toFixed(1);
}

export function getReviews(name: string): number {
  return (name.charCodeAt(0) % 60) + 12;
}
