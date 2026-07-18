import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://goroyattemiyo.github.io',
  base: '/system-sound-portfolio',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
