// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aurconstantin.github.io',
  integrations: [sitemap({
    // The About page also serves the root URL.
    filter: (url) => !/^\/about\/?$/.test(new URL(url).pathname),
  }), {
    name: 'about-homepage',
    hooks: {
      'astro:config:setup': ({ injectRoute }) => {
        injectRoute({ pattern: '/', entrypoint: './src/pages/about.astro' });
      },
    },
  }],
});
