import { defineConfig } from "@yacms/core/config";

export default defineConfig({
  plugins: {
    ga4: {
      trackingId: "G-XXXXXXXXX", // Replace with your GA4 Measurement ID
    },
    tawk: {
      widgetId: "69bc038b22e4791c3681a8c2/1jk36rmup",
      source: "yacms-template.fr",
    },
    klaro: {
      privacyPolicyPath: "/mentions-legales",
    },
  },
});
