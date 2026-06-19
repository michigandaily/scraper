# scraper

> A template scraper for live and scheduled data collection

Scraper is a template starter for scheduled data collection, such as via a cron schedule for live reporting or data stories.
It is primarily an extensible example to use [michigandaily/piping-bag](https://github.com/michigandaily/piping-bag) and a variety of scraping libraries and helpers.

It has several useful features:
[ x ] Easy deploy of the scraper to AWS Lambda scheduled with AWS EventBridge
[ x ] Template listener for real-time updates on data collection to AWS S3
[ ] Automated Docker build, deployment and local testing
[ ] JSON validation for scraper output
[ ] Puppeteer and Chromium as default dependencies

## Using this template

Click the green "Use this template" button to create a new instance of the `scraper` template. Then, clone the new instance and run `pnpm install` to initialize the project.
To do a test run of the scraper, you can use `node src/scrapers/scraper.js`. The `pipe` helper function will automatically log your scraped data on local environments.

See the [usage section in the `piping-bag` README](https://github.com/michigandaily/piping-bag#usage) for further examples on using the `PipeClient` and piping-bag helper functions. A starting point for usage of the library is also provided within the template.

With `piping-bag` as a default dependency, you can also use all supported `piping-bag` CLI commands:

```bash
# deploys the scraper script to AWS Lambda and uploads an execution sechedule using AWS EventBridge
pnpm pipe deploy

# uploads just the scraper script without an execution schedule
pnpm pipe upload

# uploads just the execution schedule
pnpm pipe schedule

# lists all deployed/active remote resources on AWS
pnpm pipe list

# deletes all deployed/active remote resources on AWS
pnpm pipe delete
```

## Deploying to AWS Lambda

Refer to the [deployment section in the `piping-bag` README](https://github.com/michigandaily/piping-bag#deployment) for instructions and examples on setting up a configuration file for deploying to AWS Lambda.

1. Make sure that the `bucket` you use is a valid AWS S3 bucket and has public read and list permissions.
2. Verify that you `start`, `end` and `rate` for your scraping schedule is as intended.
3. Run `pnpm pipe deploy`.
