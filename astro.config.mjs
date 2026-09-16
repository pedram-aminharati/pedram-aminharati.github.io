import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Change `site` to the custom domain once it is bought.
export default defineConfig({
  site: 'https://pedram-aminharati.github.io',
  vite: { plugins: [tailwindcss()] },
});
