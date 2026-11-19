// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aurconstantin.github.io',
  integrations: [{
    name: 'about-homepage',
    hooks: {
      'astro:config:setup': ({ injectRoute }) => {
        injectRoute({ pattern: '/', entrypoint: './src/pages/about.astro' });
      },
    },
  }],
});
