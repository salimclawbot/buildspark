import { MetadataRoute } from "next";
import { suburbs } from "@/data/suburbs";

const BASE_URL = "https://buildspark.com.au";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: { url: string; priority: number; changeFrequency: Freq }[] = [
    { url: `${BASE_URL}`, priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/services/tradies`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/services/cafes`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/services/bakeries`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/services/mechanics`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/services/bookkeepers`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/pricing`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/portfolio`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/locations`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/case-studies`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/reviews`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/blog`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/free-website-audit`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/quiz`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/privacy`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${BASE_URL}/terms`, priority: 0.3, changeFrequency: "yearly" },
  ];

  const blogPosts: { url: string; priority: number; changeFrequency: Freq }[] = [
    { url: `${BASE_URL}/blog/tradie-google`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/cafe-website-guide`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/mechanic-case-study`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/bookkeeper-website`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/website-speed`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/google-business-profile`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/why-cheap-websites-fail`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/website-design-geelong`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/cheap-website-victoria`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/get-more-customers-online`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/website-vs-social-media`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/bakery-website-guide`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/best-website-builder-small-business`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/how-long-does-a-website-take`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/how-much-does-a-website-cost`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/local-seo-victoria`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/tradie-website-tips`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/website-design-ballarat`, priority: 0.7, changeFrequency: "monthly" },
  ];

  const suburbPages: { url: string; priority: number; changeFrequency: Freq }[] = suburbs.map((s) => ({
    url: `${BASE_URL}/locations/${s.slug}`,
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  return [...staticPages, ...blogPosts, ...suburbPages].map((page) => ({
    url: page.url,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
