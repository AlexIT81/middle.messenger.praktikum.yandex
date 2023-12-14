import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import autoprefixer from 'autoprefixer';
import cssnanoPlugin from 'cssnano';
import { resolve } from 'path';
import vitePluginHandlebarsPrecompile from './vite-plugin-handelbars-precompile';

const root = resolve(__dirname, './src/pages');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  root,
  plugins: [vitePluginHandlebarsPrecompile(),
    Inspect(),
  ],
  build: {
    outDir,
    emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [autoprefixer({}), cssnanoPlugin({ preset: 'default' })],
    },
  },
});
