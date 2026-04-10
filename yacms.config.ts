import { defineConfig } from "@yacms/core/config";

export default defineConfig({
  plugins: {
    ga4: {
      enabled: false,
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
    defaultLocale: 'fr',
    locales: [
      { code: 'en', label: 'English' },
      { code: 'de', label: 'Deutsch' },
      { code: 'fr', label: 'Français' },
      { code: 'zh', label: '中文' },
      { code: 'ar', label: 'العربية' },
    ],
    routing: 'prefix-except-default',
    fallback: 'default',
  },
});
