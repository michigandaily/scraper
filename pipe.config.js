import { defineConfig, defineSchedulerDate } from "piping-bag";

export default defineConfig({
  name: "scraper",
  profile: "pipe",
  deployment: {
    handler: "scraper.main",
    // path: "./tmp/scraper.zip",
    zip_dir: "./tmp",
  },
  schedule: {
    start: defineSchedulerDate({
      hour: 9, // 9 AM
      day: 1, // 1st
      month: 1, // January
      year: 2027,
    }),
    end: defineSchedulerDate({
      hour: 21, // 9 PM
      day: 2, // 2nd
      month: 1, // January
      year: 2027,
    }),
    rate: "rate(5 minutes)",
  },
  schema: {
    bucket: "stash.michigandaily.com",
  },
});
