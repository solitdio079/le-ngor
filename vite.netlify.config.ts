import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));
const netlifyRoot = fileURLToPath(new URL('./netlify', import.meta.url));
const publicDir = fileURLToPath(new URL('./public', import.meta.url));
const outputDir = fileURLToPath(new URL('./dist-netlify', import.meta.url));

export default defineConfig({
  root: netlifyRoot,
  publicDir,
  plugins: [
    react(),
    {
      name: 'netlify-deploy-metadata',
      transformIndexHtml(html) {
        const origin = (
          process.env.DEPLOY_PRIME_URL ??
          process.env.URL ??
          'https://le-ngor-menu.solitdio079.chatgpt.site'
        ).replace(/\/$/, '');

        return html.replaceAll('__SITE_ORIGIN__', origin);
      },
    },
  ],
  server: {
    fs: { allow: [projectRoot] },
  },
  build: {
    outDir: outputDir,
    emptyOutDir: true,
  },
});
