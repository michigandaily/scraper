import { defineConfig } from "piping-bag";

export default defineConfig({
  deployment: {
    name: "scraper",
    handler: "scraper.main",
    // path: "./tmp/scraper.zip",
    zip_dir: "./tmp",
    profile: "pipe",
  },
});
