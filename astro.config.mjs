import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://drmalepa.co.za',
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://drmalepa.co.za/' || item.url === 'https://drmalepa.co.za') {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        if (item.url.includes('/research')) {
          return { ...item, priority: 0.9, changefreq: 'monthly' };
        }
        if (item.url.includes('/about') || item.url.includes('/contact')) {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }
        if (
          item.url.includes('/privacy-policy') ||
          item.url.includes('/cookie-policy') ||
          item.url.includes('/terms-and-conditions')
        ) {
          return { ...item, priority: 0.3, changefreq: 'yearly' };
        }
        return item;
      },
    }),
  ],
});
