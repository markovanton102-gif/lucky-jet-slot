// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lucky-jet-slot.fun',
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [sitemap()],
});
