/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/bakery-website-tips",
        destination: "/blog/bakery-website-guide",
        permanent: true,
      },
      {
        source: "/blog/local-seo-small-business",
        destination: "/blog/local-seo-victoria",
        permanent: true,
      },
      {
        source: "/blog/local-seo-tips",
        destination: "/blog/local-seo-victoria",
        permanent: true,
      },
      {
        source: "/blog/tradie-website-cost",
        destination: "/blog/how-much-does-a-website-cost",
        permanent: true,
      },
      {
        source: "/blog/website-cost",
        destination: "/blog/how-much-does-a-website-cost",
        permanent: true,
      },
      {
        source: "/blog/cafe-restaurant-website",
        destination: "/blog/cafe-website-guide",
        permanent: true,
      },
      {
        source: "/blog/cafe-website",
        destination: "/blog/cafe-website-guide",
        permanent: true,
      },
      {
        source: "/blog/cafe-website-must-haves",
        destination: "/blog/cafe-website-guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
