import { defineConfig } from 'vite';
import { resolve } from 'path';

function adjustHtmlPlugin() {
  return {
    name: 'adjust-html',
    transformIndexHtml(html) {
      return html
        .replace(
          /<link rel="stylesheet"[^>]*href="([^"]*)"[^>]*>/g,
          (match, p1) => {
            const newPath = p1.replace(/^\//, './');
            return `<link rel="stylesheet" href="${newPath}">`;
          }
        )
        .replace(
          /<script([^>]*)src="([^"]*)"([^>]*)>/g,
          (match, before, src, after) => {
            const newSrc = src.replace(/^\//, './');
            const typeModule = before.includes('type="module"') || after.includes('type="module"') 
              ? 'type="module"' 
              : '';
            return `<script ${typeModule} src="${newSrc}">`;
          }
        )
        .replace(
          /<img([^>]*)src="(\/[^"]*\.(png|svg))"([^>]*)>/g,
          (match, before, src, ext, after) => {
            const newSrc = src.replace(/^\//, './');
            return `<img${before}src="${newSrc}"${after}>`;
          }
        );
    }
  };
}

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html')
      }
    },
    assetsDir: 'assets'
  },
  plugins: [adjustHtmlPlugin()],
  server: {
    open: '/index.html'
  },
  assetsInclude: ['**/*.svg'], // Ensure SVGs are treated as assets
  base: './' // This ensures all assets are loaded with relative paths
});