import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import Inspect from 'vite-plugin-inspect';
import autoprefixer from 'autoprefixer';
import cssnanoPlugin from 'cssnano';
import { resolve } from 'path';

const root = resolve(__dirname, './src/pages');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  root,
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      context: {
        username: 'Ivan Ivanov',
      },
    }),
    Inspect(),
  ],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        login: resolve(root, 'login', 'index.html'),
        register: resolve(root, 'register', 'index.html'),
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({}),
        cssnanoPlugin({ preset: 'default' }),
      ],
    },
  },
});
