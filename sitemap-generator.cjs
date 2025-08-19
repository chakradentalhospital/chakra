const { SitemapStream } = require("sitemap");
const { createWriteStream } = require("fs");

const links = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },

  { url: "/services/kids-dentistry", changefreq: "monthly", priority: 0.7 },
  { url: "/services/dental-consultations", changefreq: "monthly", priority: 0.7 },
  { url: "/services/pain-free-treatment", changefreq: "monthly", priority: 0.7 },
  { url: "/services/aligners", changefreq: "monthly", priority: 0.7 },
  { url: "/services/invisalign", changefreq: "monthly", priority: 0.7 },
  { url: "/services/wisdom-tooth-removal", changefreq: "monthly", priority: 0.7 },
  { url: "/services/scaling", changefreq: "monthly", priority: 0.7 },
  { url: "/services/tooth-whitening", changefreq: "monthly", priority: 0.7 },
  { url: "/services/dental-implants", changefreq: "monthly", priority: 0.7 },
  { url: "/services/root-canal-treatment", changefreq: "monthly", priority: 0.7 },
  { url: "/services/full-mouth-rehabilitation", changefreq: "monthly", priority: 0.7 },
  { url: "/services/dental-crowns", changefreq: "monthly", priority: 0.7 },
  { url: "/services/zirconia-crowns", changefreq: "monthly", priority: 0.7 },
];

(async () => {
  const sitemap = new SitemapStream({ hostname: "https://www.chakradental.in/" }); 
  const writeStream = createWriteStream("./public/sitemap.xml");

  sitemap.pipe(writeStream);

  links.forEach((link) => sitemap.write(link));
  sitemap.end();

  writeStream.on("finish", () => {
    console.log("✅ Sitemap generated at /public/sitemap.xml");
  });

  writeStream.on("error", (err) => {
    console.error("❌ Error writing sitemap:", err);
  });
})();
