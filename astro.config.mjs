// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://ligofolio.com',
  // Hybrid SSR — sayfa-bazlı prerender opt-in (statik sayfalar `export const
  // prerender = true` ile prerendered kalır; dinamik sayfalar (login, admin,
  // premium-activate) SSR çalışır)
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: false },
  }),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'tr',
        locales: { tr: 'tr-TR' },
      },
    }),
  ],
});
