export type ComparisonVisual = {
  badTitle: string;
  badItems: string[];
  goodTitle: string;
  goodItems: string[];
  takeaway: string;
};

export type ArticleSection = {
  eyebrow: string;
  title: string;
  body: string[];
  fix: string;
  visual: ComparisonVisual;
};

export type AnalysisPost = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  category: string;
  date: string;
  published: string;
  readTime: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  hero: string;
  heroAlt: string;
  intro: string[];
  quickWins: string[];
  sections: ArticleSection[];
  faq: { question: string; answer: string }[];
  related: { title: string; href: string; readTime: string }[];
};

export const analysisPosts: AnalysisPost[] = [
  {
    slug: "plumber-website-analysis-top-5-percent",
    title: "We Analysed 25 Local Plumbers Websites. Here's What the Top 5% Do Differently.",
    metaTitle: "Plumber Website Analysis: What Top Sites Do | BuildSpark",
    description:
      "We reviewed 25 local plumber websites. The winners get more calls because they make trust, suburbs, services, and contact obvious.",
    excerpt:
      "The plumber websites winning more jobs are not fancy. They are clear, local, fast, and easy to call.",
    category: "Plumbing SEO",
    date: "5 Aug 2026",
    published: "2026-08-05",
    readTime: "8 min read",
    primaryKeyword: "plumber website",
    secondaryKeywords: [
      "plumbing website design",
      "plumber SEO",
      "local plumber enquiries",
      "emergency plumber website",
    ],
    hero: "/images/tradie-on-job-call.webp",
    heroAlt: "Local plumber answering a job enquiry from his website",
    intro: [
      "Most plumber websites make people think too hard. The best ones get more calls because the phone number, service area, trust proof, and quote form are obvious straight away.",
    ],
    quickWins: [
      "Put a tap-to-call number and emergency button in the first screen.",
      "Say the suburbs you serve and the jobs you want more of.",
      "Show reviews, licences, and real job proof before asking for the call.",
      "Make the page easy to use on a phone.",
      "Keep the quote form short enough to finish in 10 seconds.",
    ],
    sections: [
      {
        eyebrow: "Point 1",
        title: "The best plumber websites make the phone call obvious",
        body: [
          "When someone has water coming through the ceiling, they do not want your company story. They want to know if you can help and how fast they can reach you.",
          "Weak plumber websites hide the phone number in the footer. Strong ones show a phone number, emergency button, and service area before the customer scrolls.",
        ],
        fix:
          "Add a tap-to-call number, an emergency plumber button, and your main suburbs in the first screen.",
        visual: {
          badTitle: "Costly Setup",
          badItems: ["Phone hidden in footer", "Generic contact button", "No emergency wording"],
          goodTitle: "Top 5% Setup",
          goodItems: ["Tap-to-call in header", "Emergency CTA above fold", "Suburb shown early"],
          takeaway: "A stressed customer should be able to call in one tap.",
        },
      },
      {
        eyebrow: "Point 2",
        title: "They talk about real plumbing jobs, not vague services",
        body: [
          "\"Plumbing services\" is too vague. People search for blocked drains, hot water repairs, toilet leaks, gas fitting, burst pipes, and emergency plumbers near them.",
          "The better sites name the exact jobs and suburbs. That helps Google understand the page and helps the customer feel like they found the right plumber.",
        ],
        fix:
          "List your main jobs in plain words and pair them with the suburbs you actually want work from.",
        visual: {
          badTitle: "Weak Copy",
          badItems: ["General services", "No job examples", "No suburb wording"],
          goodTitle: "Better Copy",
          goodItems: ["Blocked drains", "Hot water repairs", "Emergency plumber Pakenham"],
          takeaway: "Name the job the customer is already searching for.",
        },
      },
      {
        eyebrow: "Point 3",
        title: "They prove trust before asking for the job",
        body: [
          "A nice looking website is not enough. People want signs you are real, licensed, insured, and trusted by other locals.",
          "The stronger sites show reviews, licence details, response times, and real job photos near the call button. The weaker sites make people hunt for proof.",
        ],
        fix:
          "Put your review score, licence note, response time, and real job photos near your main call or quote button.",
        visual: {
          badTitle: "No Proof",
          badItems: ["Stock van photo", "No reviews", "No licence details"],
          goodTitle: "Trust Built",
          goodItems: ["4.8 star review badge", "Licensed and insured", "Real local job photos"],
          takeaway: "Trust points reduce doubt before the customer rings.",
        },
      },
      {
        eyebrow: "Point 4",
        title: "They build the page for thumbs, not desktops",
        body: [
          "Most urgent plumbing searches happen on a phone. If the text is tiny, the menu is awkward, or the call button is hard to tap, you lose the job.",
          "The best sites use short sections, big buttons, and contact options that stay easy while the customer scrolls.",
        ],
        fix:
          "Open your site on your phone. If calling, reading, or sending a quote request feels annoying, fix mobile first.",
        visual: {
          badTitle: "Mobile Pain",
          badItems: ["Tiny text", "Hard-to-tap buttons", "Long form"],
          goodTitle: "Mobile Ready",
          goodItems: ["Large call button", "Short quote form", "Easy scroll sections"],
          takeaway: "A good plumber website works one-handed on site or at home.",
        },
      },
      {
        eyebrow: "Point 5",
        title: "They make the quote form short and low-risk",
        body: [
          "Long forms kill enquiries. If you ask for too much too soon, busy customers leave and call the next plumber.",
          "The better sites ask for the basics only: name, phone, suburb, and job type. They also tell people when they will hear back.",
        ],
        fix:
          "Use a short form with name, phone, suburb, and job type. Add a simple line like \"takes 10 seconds\" and \"we reply today\".",
        visual: {
          badTitle: "Friction",
          badItems: ["10-field form", "No response time", "Vague submit button"],
          goodTitle: "Easy Enquiry",
          goodItems: ["4 quick fields", "Reply time shown", "Clear callback CTA"],
          takeaway: "A short form gets more quote requests from busy customers.",
        },
      },
    ],
    faq: [
      {
        question: "What should a plumber website include?",
        answer:
          "A plumber website should include tap-to-call buttons, services, suburbs, emergency wording, reviews, licence proof, job photos, and a short quote form. The goal is to make trust and contact easy.",
      },
      {
        question: "Do plumbers need local SEO?",
        answer:
          "Yes. Plumbers rely on local searches like blocked drain near me or emergency plumber in a suburb. Local SEO helps Google connect those searches with your website and Google Business Profile.",
      },
      {
        question: "How can a plumber get more website enquiries?",
        answer:
          "Make the site faster, clearer, and easier to contact. Put your phone number high, show proof, use local service wording, and keep forms short.",
      },
    ],
    related: [
      { title: "7 Things Every Tradie Website Must Have", href: "/blog/tradie-website-tips", readTime: "5 min read" },
      { title: "Why Your Tradie Business Isn't on Google", href: "/blog/tradie-google", readTime: "5 min read" },
    ],
  },
  {
    slug: "why-73-percent-website-visitors-never-contact-you",
    title: "Why 73% of Website Visitors Never Contact You (And How to Fix It)",
    metaTitle: "Why Website Visitors Do Not Contact You | BuildSpark",
    description:
      "Most local business websites leak enquiries. Learn why visitors leave without calling and how to turn more of them into leads.",
    excerpt:
      "If people visit your website but do not call, the problem is usually not traffic. It is friction, trust, and unclear next steps.",
    category: "Conversions",
    date: "5 Aug 2026",
    published: "2026-08-05",
    readTime: "7 min read",
    primaryKeyword: "website visitors never contact you",
    secondaryKeywords: [
      "website conversion rate",
      "get more enquiries",
      "local business leads",
      "website contact form",
    ],
    hero: "/images/website-call-now.webp",
    heroAlt: "Phone enquiry from a local business website",
    intro: [
      "Getting people to your website is only half the job. The real money is in what happens next.",
      "For many local businesses, most visitors look around for a few seconds, get confused, and leave without calling. That does not always mean they were bad leads. It often means the website made the next step too hard.",
      "Here is why visitors disappear and what to fix so more of them contact you.",
    ],
    quickWins: [
      "Make the first screen answer what you do, where you work, and how to contact you.",
      "Use one main CTA instead of five competing buttons.",
      "Put reviews near the enquiry point.",
      "Cut your form down to the details you actually need.",
      "Make mobile speed and tap-to-call a priority.",
    ],
    sections: [
      {
        eyebrow: "Point 1",
        title: "Visitors leave when the first screen is unclear",
        body: [
          "A busy customer will not work hard to figure out what you do. If the first screen is vague, they assume they are in the wrong place.",
          "Strong local websites say the trade or service, the area, and the result straight away. No cute headline. No mystery. Just clear and useful.",
        ],
        fix:
          "Use a headline like electrician in Ballarat, same-week bookings, free quote instead of welcome to our website.",
        visual: {
          badTitle: "Confusing Hero",
          badItems: ["Welcome headline", "No suburb", "No clear offer"],
          goodTitle: "Clear Hero",
          goodItems: ["Service named", "Area named", "Call or quote CTA"],
          takeaway: "Visitors should understand the page in five seconds.",
        },
      },
      {
        eyebrow: "Point 2",
        title: "They do not trust you yet",
        body: [
          "People are cautious. Before they send a form or call, they want to know you are real and safe to deal with.",
          "If your reviews, photos, ABN, licence, or results are missing, the visitor has to take a risk. Most will just go back to Google and click the next business.",
        ],
        fix:
          "Add reviews, real photos, years in business, licences, and a short guarantee close to the first CTA.",
        visual: {
          badTitle: "Doubt",
          badItems: ["No reviews", "Stock photos", "No proof details"],
          goodTitle: "Confidence",
          goodItems: ["Customer reviews", "Real team photo", "Licence or guarantee"],
          takeaway: "Proof gives people a reason to choose you.",
        },
      },
      {
        eyebrow: "Point 3",
        title: "Your form asks for too much",
        body: [
          "A long form feels like homework. On a phone, it feels even worse.",
          "Most local enquiries only need a name, phone, service, suburb, and a short message. You can ask the rest when you call back.",
        ],
        fix:
          "Keep the main form under five fields and make the submit button say what happens next.",
        visual: {
          badTitle: "Form Friction",
          badItems: ["12 fields", "Required budget", "No callback promise"],
          goodTitle: "Simple Form",
          goodItems: ["Name and phone", "Job type", "Fast callback promise"],
          takeaway: "Short forms get finished more often.",
        },
      },
      {
        eyebrow: "Point 4",
        title: "The call button is too hard to find",
        body: [
          "Local customers often want to call, especially for urgent jobs. If your number is a small line of text or only on the contact page, you are making them work.",
          "Good websites treat the phone call like the main action. The number is visible, tappable, and repeated in the right places.",
        ],
        fix:
          "Use a sticky mobile call button and place tap-to-call links in the header, hero, and final CTA.",
        visual: {
          badTitle: "Hidden Number",
          badItems: ["Only in footer", "Not clickable", "No mobile button"],
          goodTitle: "Easy Call",
          goodItems: ["Sticky call button", "Clickable number", "Repeated CTA"],
          takeaway: "If calling is easy, more people call.",
        },
      },
      {
        eyebrow: "Point 5",
        title: "Your site is slow when people are ready to act",
        body: [
          "Slow websites do not just feel annoying. They create doubt. If the page loads badly, the visitor wonders if the business is just as rough behind the scenes.",
          "A fast site makes the business feel organised. It also keeps people around long enough to read, trust, and enquire.",
        ],
        fix:
          "Compress images, remove heavy effects, and test the site on mobile data, not just office Wi-Fi.",
        visual: {
          badTitle: "Slow Site",
          badItems: ["Huge images", "Spinning loader", "Late contact form"],
          goodTitle: "Fast Site",
          goodItems: ["Compressed images", "Loads under 3 seconds", "CTA visible fast"],
          takeaway: "Speed keeps hot leads from bouncing.",
        },
      },
    ],
    faq: [
      {
        question: "Why do people visit my website but not contact me?",
        answer:
          "Usually the page is unclear, slow, hard to use on mobile, missing trust proof, or asking too much in the form. Fix those before spending more on ads.",
      },
      {
        question: "What is a good website enquiry rate?",
        answer:
          "It depends on the trade and traffic quality, but a local service website should usually aim to turn more visitors into calls or quote requests by making contact simple and visible.",
      },
      {
        question: "Should I use a phone CTA or contact form?",
        answer:
          "Use both. Urgent customers often call, while price-shopping customers may prefer a form. Make both easy and keep the form short.",
      },
    ],
    related: [
      { title: "Your Website Is Too Slow and It's Costing You Customers", href: "/blog/website-speed", readTime: "5 min read" },
      { title: "How to Get More Customers Online", href: "/blog/get-more-customers-online", readTime: "6 min read" },
    ],
  },
  {
    slug: "why-top-dental-practices-get-more-enquiries",
    title: "Why Top Dental Practices Get More Enquiries (Even If You're Better)",
    metaTitle: "Dental Practice Website Enquiries Guide | BuildSpark",
    description:
      "Better dentistry does not always mean more enquiries. Learn why top dental practices win online and what your clinic can fix.",
    excerpt:
      "The best dentist does not always get the enquiry. The practice that looks easier, safer, and clearer online often wins first.",
    category: "Dental Websites",
    date: "5 Aug 2026",
    published: "2026-08-05",
    readTime: "8 min read",
    primaryKeyword: "dental practice enquiries",
    secondaryKeywords: [
      "dental website design",
      "dentist SEO",
      "dental clinic website",
      "get more dental patients",
    ],
    hero: "/images/business-owner-success.webp",
    heroAlt: "Local business owner reviewing new website enquiries",
    intro: [
      "You can be the better dentist and still lose the enquiry. That sounds harsh, but it is what happens online every day.",
      "Patients do not know who is better clinically when they are comparing websites. They judge what they can see: trust, reviews, treatment information, photos, booking ease, and whether the practice feels right for them.",
      "Here is why top dental practices get more enquiries and what to fix if your clinic should be getting more.",
    ],
    quickWins: [
      "Make booking visible on every page.",
      "Explain common treatments in plain English.",
      "Show real dentist and clinic photos.",
      "Put reviews and finance/payment information near treatment CTAs.",
      "Build local suburb and treatment pages for search.",
    ],
    sections: [
      {
        eyebrow: "Point 1",
        title: "They make booking feel easy, not awkward",
        body: [
          "Dental enquiries are often delayed because patients feel nervous, busy, or unsure what treatment they need. If booking looks like a hassle, they put it off.",
          "Top practices make the next step obvious: book online, call reception, or request a callback. They also explain what happens after the enquiry so the patient feels looked after.",
        ],
        fix:
          "Use clear booking buttons, phone CTAs, and a simple new patient enquiry form on treatment pages.",
        visual: {
          badTitle: "Booking Barrier",
          badItems: ["Tiny contact link", "No online booking", "Unclear next step"],
          goodTitle: "Easy Booking",
          goodItems: ["Book online button", "Call reception CTA", "New patient form"],
          takeaway: "Patients enquire when the first step feels simple.",
        },
      },
      {
        eyebrow: "Point 2",
        title: "They explain treatments without sounding clinical",
        body: [
          "Most patients do not search like dentists speak. They search teeth whitening cost, sore tooth, missing tooth options, or Invisalign near me.",
          "The practices that win explain treatments in patient language. They answer the simple questions first: what is it, who is it for, how long does it take, and what does it cost from.",
        ],
        fix:
          "Rewrite treatment pages for patients, not other clinicians. Use plain headings and answer common questions early.",
        visual: {
          badTitle: "Clinical Copy",
          badItems: ["Jargon-heavy", "No costs explained", "No patient questions"],
          goodTitle: "Patient Copy",
          goodItems: ["Plain language", "Treatment steps", "Cost and timing notes"],
          takeaway: "Clear treatment pages turn uncertainty into enquiries.",
        },
      },
      {
        eyebrow: "Point 3",
        title: "They show the faces behind the practice",
        body: [
          "Dentistry is personal. A patient wants to know who will be looking after them before they book.",
          "Generic stock photos make every clinic look the same. Real dentist photos, reception photos, surgery photos, and team bios build comfort before the patient walks in.",
        ],
        fix:
          "Add real photos of the dentists, team, reception, treatment rooms, and outside of the clinic.",
        visual: {
          badTitle: "Generic Clinic",
          badItems: ["Stock smile photo", "No dentist bios", "No clinic photos"],
          goodTitle: "Real Practice",
          goodItems: ["Team photos", "Dentist profiles", "Clinic walkthrough"],
          takeaway: "Familiar faces reduce patient nerves.",
        },
      },
      {
        eyebrow: "Point 4",
        title: "They use reviews where patients make decisions",
        body: [
          "A review page is useful, but it is not enough. Patients need proof while they are reading about a treatment or deciding whether to book.",
          "Top practices place short reviews near booking buttons, treatment sections, and new patient CTAs. That proof helps the patient feel safe enough to act.",
        ],
        fix:
          "Add relevant reviews on treatment pages, especially for nervous patient care, emergency appointments, and cosmetic results.",
        visual: {
          badTitle: "Buried Proof",
          badItems: ["Reviews on one page only", "No treatment proof", "No star rating near CTA"],
          goodTitle: "Proof Nearby",
          goodItems: ["Reviews by treatment", "Stars near booking", "Nervous patient quotes"],
          takeaway: "Put proof next to the decision point.",
        },
      },
      {
        eyebrow: "Point 5",
        title: "They build pages for the treatments and suburbs they want",
        body: [
          "A single services page usually cannot rank for every dental treatment. Google needs clear pages for things like emergency dentist, dental implants, Invisalign, whitening, and family dentist in your area.",
          "The best practices build focused pages that match what patients search. Each page has one job: answer the question and guide the patient to book.",
        ],
        fix:
          "Create separate pages for your priority treatments and include suburb wording where it is natural.",
        visual: {
          badTitle: "One Big Page",
          badItems: ["All treatments together", "No suburb signals", "Weak Google match"],
          goodTitle: "Focused Pages",
          goodItems: ["Emergency dentist page", "Invisalign page", "Suburb service pages"],
          takeaway: "Focused pages give Google and patients a clearer answer.",
        },
      },
    ],
    faq: [
      {
        question: "How can a dental practice get more enquiries?",
        answer:
          "Make booking easy, write treatment pages in patient language, show real photos, use reviews near CTAs, and build pages for the treatments and suburbs you want to rank for.",
      },
      {
        question: "Do dental clinics need separate treatment pages?",
        answer:
          "Yes. Separate treatment pages help patients understand their options and help Google match your clinic to specific searches like emergency dentist or teeth whitening.",
      },
      {
        question: "What should a dental website CTA say?",
        answer:
          "Use clear CTAs like Book an Appointment, Request a Callback, or Ask About This Treatment. Avoid vague buttons like Learn More when the patient is ready to act.",
      },
    ],
    related: [
      { title: "Website vs Social Media for Business", href: "/blog/website-vs-social-media", readTime: "5 min read" },
      { title: "Local SEO for Victorian Businesses", href: "/blog/local-seo-victoria", readTime: "14 min read" },
    ],
  },
  {
    slug: "500-local-business-website-analysis",
    title: "We Analysed 500 Local Business Websites. Here's What the Top 5% Do Differently.",
    metaTitle: "500 Local Business Websites Analysed | BuildSpark",
    description:
      "After reviewing 500 local business websites, the top performers all had the same simple habits: clarity, speed, trust, local SEO, and easy contact.",
    excerpt:
      "The top local business websites were not the flashiest. They were the easiest to understand, trust, and contact.",
    category: "Local SEO",
    date: "5 Aug 2026",
    published: "2026-08-05",
    readTime: "9 min read",
    primaryKeyword: "local business websites",
    secondaryKeywords: [
      "small business website design",
      "local business SEO",
      "website enquiries",
      "website conversion",
    ],
    hero: "/images/vic-main-street.webp",
    heroAlt: "Victorian main street with local businesses",
    intro: [
      "We have looked at hundreds of local business websites: tradies, cafes, clinics, mechanics, bookkeepers, bakers, salons, and service businesses.",
      "The pattern is clear. The top 5% are not winning because they have huge budgets or fancy animations. They win because the website answers the customer's questions faster than everyone else.",
      "Here is what the best local business websites do differently.",
    ],
    quickWins: [
      "Say what you do and where you do it in the first screen.",
      "Use real photos and real proof.",
      "Make mobile contact easy.",
      "Build local pages for high-value services and suburbs.",
      "Keep the site fast and simple.",
    ],
    sections: [
      {
        eyebrow: "Point 1",
        title: "They pass the five-second test",
        body: [
          "A visitor should know what you do, where you are, and what to do next within five seconds. If they cannot, the website is working against you.",
          "The best sites use plain headlines, useful subheadings, and one clear button. They do not waste the first screen on vague brand lines.",
        ],
        fix:
          "Rewrite your homepage hero so a stranger can understand your business without scrolling.",
        visual: {
          badTitle: "Vague",
          badItems: ["We create solutions", "No location", "Three competing buttons"],
          goodTitle: "Clear",
          goodItems: ["Service stated", "Location stated", "One main CTA"],
          takeaway: "Clear beats clever on a local business website.",
        },
      },
      {
        eyebrow: "Point 2",
        title: "They are built around the customer's problem",
        body: [
          "A lot of websites talk mainly about the business: our mission, our values, our process. That can matter later, but the customer arrives with a problem.",
          "The best websites name that problem early and show the outcome. More bookings. Less stress. A fixed leak. A working car. A clean set of books.",
        ],
        fix:
          "Turn service descriptions into problem-and-result sections that sound like your customers talk.",
        visual: {
          badTitle: "Business-Focused",
          badItems: ["About us first", "Long mission copy", "No customer problem"],
          goodTitle: "Customer-Focused",
          goodItems: ["Problem named", "Result shown", "Simple service path"],
          takeaway: "Talk about what the customer needs fixed.",
        },
      },
      {
        eyebrow: "Point 3",
        title: "They use proof everywhere it matters",
        body: [
          "Reviews, before-and-after photos, case studies, guarantees, accreditations, and local experience all do the same job: they remove doubt.",
          "The weaker sites put proof on a separate page. The stronger sites weave it through the homepage, service pages, and contact areas.",
        ],
        fix:
          "Add a proof block after each major service section and beside your form.",
        visual: {
          badTitle: "Proof Hidden",
          badItems: ["One testimonials page", "No project photos", "No guarantees"],
          goodTitle: "Proof Visible",
          goodItems: ["Reviews near CTA", "Real results", "Guarantees and badges"],
          takeaway: "People need proof before they enquire.",
        },
      },
      {
        eyebrow: "Point 4",
        title: "They match the way locals search",
        body: [
          "Local search is specific. People search mechanic near me, cafe in Geelong, bookkeeper Ballarat, emergency plumber Pakenham, or website designer Victoria.",
          "Top sites create pages and headings that match those searches naturally. That does not mean stuffing suburbs everywhere. It means being clear about services and service areas.",
        ],
        fix:
          "Map your best services to your best suburbs and build pages for the combinations that matter most.",
        visual: {
          badTitle: "No Local Signals",
          badItems: ["Generic service page", "No suburb pages", "Weak map presence"],
          goodTitle: "Local Match",
          goodItems: ["Service + suburb pages", "Google profile linked", "Clear service areas"],
          takeaway: "Google needs local signals to rank local businesses.",
        },
      },
      {
        eyebrow: "Point 5",
        title: "They make contact feel like the natural next step",
        body: [
          "The best websites do not wait until the bottom to ask for the enquiry. They guide people along the page with simple next steps.",
          "That might be call now, request a quote, book a table, send your website for an audit, or ask for a callback. The wording changes, but the idea is the same: make it easy.",
        ],
        fix:
          "Place a clear CTA after each important section and repeat it at the bottom with a short form.",
        visual: {
          badTitle: "Dead Ends",
          badItems: ["No CTA after services", "Contact page only", "Long enquiry path"],
          goodTitle: "Guided Path",
          goodItems: ["CTA after sections", "Short form", "Phone and email visible"],
          takeaway: "Guide the visitor instead of hoping they find the contact page.",
        },
      },
    ],
    faq: [
      {
        question: "What makes a good local business website?",
        answer:
          "A good local business website is clear, fast, mobile-friendly, easy to contact, locally relevant, and backed by proof such as reviews and real photos.",
      },
      {
        question: "Do local businesses need a blog?",
        answer:
          "A blog helps when it answers real local customer questions. You do not need weekly fluff. A few useful guides can support local SEO and build trust.",
      },
      {
        question: "What should I fix first on my website?",
        answer:
          "Fix the first screen, mobile contact, speed, and trust proof first. Those changes usually affect enquiries faster than adding extra pages.",
      },
    ],
    related: [
      { title: "How to Get More Customers Online", href: "/blog/get-more-customers-online", readTime: "6 min read" },
      { title: "The Complete Local SEO Guide", href: "/blog/local-seo-victoria", readTime: "14 min read" },
    ],
  },
  {
    slug: "local-businesses-3x-more-enquiries",
    title: "Why Some Local Businesses Get 3x More Enquiries Than Their Competitors",
    metaTitle: "Why Local Businesses Get More Enquiries | BuildSpark",
    description:
      "Some local businesses get far more enquiries with similar services and similar areas. Here are the website and SEO differences that explain it.",
    excerpt:
      "Two businesses can offer the same service in the same town. One gets steady enquiries. The other hears nothing. Here is why.",
    category: "Lead Generation",
    date: "5 Aug 2026",
    published: "2026-08-05",
    readTime: "8 min read",
    primaryKeyword: "local businesses get more enquiries",
    secondaryKeywords: [
      "local business leads",
      "get more website enquiries",
      "small business SEO",
      "website lead generation",
    ],
    hero: "/images/business-owner-success.webp",
    heroAlt: "Local business owner celebrating more website enquiries",
    intro: [
      "Two local businesses can do the same work, charge similar prices, and service the same suburbs. One gets steady calls. The other waits.",
      "Most of the time, the difference is not luck. It is how easy the business is to find, trust, and contact online.",
      "Here are the simple differences that help some local businesses get 3x more enquiries than competitors.",
    ],
    quickWins: [
      "Own the urgent searches in your area.",
      "Make your offer clear before the visitor scrolls.",
      "Remove doubt with proof close to every CTA.",
      "Follow up fast and say so on the page.",
      "Track which pages and forms bring the best leads.",
    ],
    sections: [
      {
        eyebrow: "Point 1",
        title: "They show up for buyer-ready searches",
        body: [
          "Not all website traffic is equal. A person searching how to unblock a drain may be researching. A person searching emergency plumber near me is ready to call.",
          "Businesses with more enquiries build pages and Google Business Profile content around buyer-ready searches, not just broad keywords.",
        ],
        fix:
          "Target service plus suburb terms and urgent job terms before broad informational keywords.",
        visual: {
          badTitle: "Broad Traffic",
          badItems: ["General blog topics", "No suburb targeting", "Low-intent visitors"],
          goodTitle: "Buyer Traffic",
          goodItems: ["Service + suburb", "Emergency terms", "Google map visibility"],
          takeaway: "More enquiries come from searches with intent.",
        },
      },
      {
        eyebrow: "Point 2",
        title: "Their offer is easy to understand",
        body: [
          "People do not enquire when they are confused. If your offer is buried in paragraphs or spread across three pages, you create hesitation.",
          "The best local sites make the offer simple: what you do, who it is for, what area you cover, and what happens next.",
        ],
        fix:
          "Put your core offer into one plain sentence and repeat it around your CTAs.",
        visual: {
          badTitle: "Muddy Offer",
          badItems: ["Too many services at once", "No clear promise", "Weak CTA"],
          goodTitle: "Simple Offer",
          goodItems: ["Clear service", "Clear area", "Clear next step"],
          takeaway: "A clear offer lowers the mental load.",
        },
      },
      {
        eyebrow: "Point 3",
        title: "They remove risk before the customer asks",
        body: [
          "Customers worry about price, quality, timing, mess, reliability, and whether you will actually show up.",
          "Businesses with more enquiries answer those worries directly. They show reviews, explain timing, mention guarantees, and make the first step feel safe.",
        ],
        fix:
          "Add a short objections section: pricing, timing, guarantees, clean-up, and what happens after enquiry.",
        visual: {
          badTitle: "Risk Left Open",
          badItems: ["No prices or guide", "No process", "No guarantee"],
          goodTitle: "Risk Reduced",
          goodItems: ["Price guide", "Simple process", "Guarantee or promise"],
          takeaway: "Answer worries before they become reasons to leave.",
        },
      },
      {
        eyebrow: "Point 4",
        title: "They follow up fast and make that clear",
        body: [
          "A quick reply can win the job before a competitor even checks their inbox. If your page says request a quote but gives no idea when you respond, people may call someone else.",
          "Top performers often say things like same-day callback, reply within business hours, or emergency calls answered now. That small promise matters.",
        ],
        fix:
          "Add a response-time promise you can actually keep, then build your form and phone CTA around it.",
        visual: {
          badTitle: "Slow Follow-Up",
          badItems: ["No response time", "Email only", "Missed urgent jobs"],
          goodTitle: "Fast Follow-Up",
          goodItems: ["Same-day callback", "Phone option", "Clear emergency path"],
          takeaway: "Speed is part of the offer.",
        },
      },
      {
        eyebrow: "Point 5",
        title: "They measure what is working",
        body: [
          "If you do not track enquiries, you are guessing. You might think Facebook is working when Google is sending the good leads, or you might be paying for clicks that never turn into jobs.",
          "Businesses that keep improving track calls, form submissions, top pages, and the keywords that bring serious customers.",
        ],
        fix:
          "Track calls and forms, then improve the pages that already bring enquiry traffic.",
        visual: {
          badTitle: "Guessing",
          badItems: ["No form tracking", "No call source", "No page data"],
          goodTitle: "Improving",
          goodItems: ["Calls tracked", "Forms tracked", "Best pages improved"],
          takeaway: "You cannot improve what you cannot see.",
        },
      },
    ],
    faq: [
      {
        question: "How do local businesses get more enquiries?",
        answer:
          "They target buyer-ready searches, make the offer clear, remove trust barriers, make contact easy, follow up fast, and track what brings real leads.",
      },
      {
        question: "Why do competitors get more leads than me?",
        answer:
          "They may be easier to find on Google, have stronger reviews, a clearer website, faster contact options, or better follow-up. Better service alone is not always visible online.",
      },
      {
        question: "What is the fastest way to increase website enquiries?",
        answer:
          "Improve your first screen, make phone and form contact obvious, add reviews near CTAs, and shorten the enquiry form. These reduce friction quickly.",
      },
    ],
    related: [
      { title: "Why Website Visitors Never Contact You", href: "/blog/why-73-percent-website-visitors-never-contact-you", readTime: "7 min read" },
      { title: "500 Local Business Websites Analysed", href: "/blog/500-local-business-website-analysis", readTime: "9 min read" },
    ],
  },
];

export const getAnalysisPost = (slug: string) =>
  analysisPosts.find((post) => post.slug === slug);
