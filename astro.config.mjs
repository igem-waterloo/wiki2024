import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://2024.igem.wiki',
  base: '/waterloo',
  outDir: 'public',
  publicDir: 'assets',
});
