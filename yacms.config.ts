import { defineConfig } from "@yacms/core/config";

export default defineConfig({
  plugins: {
    ga4: {
      trackingId: 'G-XXXXXXXXX',
    },
    tawk: {
      widgetId: '69bc038b22e4791c3681a8c2/1jk36rmup',
      source: 'yacms-template.fr',
    },
    klaro: {
      privacyPolicyPath: '/mentions-legales',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', label: 'English' },
      { code: 'de', label: 'Deutsch' },
    ],
    routing: 'prefix-except-default',
    fallback: 'default',
  },
});
