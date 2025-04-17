import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import path from "path";

const sitemap = new SitemapStream({ hostname: "https://webdev.hydratech.bh" });

const pages = [
  "/", // Main page
  "/#about", // About section
  "/#services", // Services section
  "/#careers", // Careers section
  "/#contact", // Contact section
];

pages.forEach((page) => {
  sitemap.write({ url: page, changefreq: "daily", priority: 0.7 });
});

sitemap.end();

// Save the sitemap to the public folder
streamToPromise(sitemap).then((sm) => {
  fs.writeFileSync(path.resolve("public", "sitemap.xml"), sm);
});
