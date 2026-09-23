import { defineConfig, devices } from "@playwright/test";
import * as dotenv from "dotenv";

const env = dotenv.config().parsed ?? {};

export default defineConfig({
  testDir: "./tests",
  timeout: 60000,
  expect: { timeout: 10000 },
  reporter: [["html", { open: "never" }]],

  use: {
    headless: false,
    trace: "on",
    screenshot: "on",
    video: {
      mode: "on",
      size: { width: 1600, height: 900 }
    },
    baseURL: process.env.BASE_URL || "https://www.test.infogreffe.fr/",  },
    
   projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1600, height: 900 },
      },
    },
  ],
});