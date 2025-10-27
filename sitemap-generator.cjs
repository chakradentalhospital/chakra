const { SitemapStream } = require("sitemap");
const { createWriteStream } = require("fs");

const links = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/blogs", changefreq: "monthly", priority: 0.8 },

  { url: "/kids-dentistry", changefreq: "monthly", priority: 0.7 },
  { url: "/dental-consultations", changefreq: "monthly", priority: 0.7 },
  { url: "/pain-free-treatment", changefreq: "monthly", priority: 0.7 },
  { url: "/aligners", changefreq: "monthly", priority: 0.7 },
  { url: "/invisalign", changefreq: "monthly", priority: 0.7 },
  { url: "/wisdom-tooth-removal", changefreq: "monthly", priority: 0.7 },
  { url: "/scaling", changefreq: "monthly", priority: 0.7 },
  { url: "/tooth-whitening", changefreq: "monthly", priority: 0.7 },
  { url: "/dental-implants", changefreq: "monthly", priority: 0.7 },
  { url: "/root-canal-treatment", changefreq: "monthly", priority: 0.7 },
  { url: "/full-mouth-rehabilitation", changefreq: "monthly", priority: 0.7 },
  { url: "/dental-crowns", changefreq: "monthly", priority: 0.7 },
  { url: "/zirconia-crowns", changefreq: "monthly", priority: 0.7 },
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
