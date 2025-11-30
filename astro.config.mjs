// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // site: '//https://cornell-notes-site.pages.dev', // 後でCloudflare Pagesのドメインに変更
});
