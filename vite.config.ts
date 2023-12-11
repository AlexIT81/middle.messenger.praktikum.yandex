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
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        login: resolve(root, 'login', 'index.html'),
        register: resolve(root, 'register', 'index.html'),
        profile: resolve(root, 'profile', 'index.html'),
        profile_edit: resolve(root, 'profile_edit', 'index.html'),
        profile_edit_password: resolve(root, 'profile_edit_password', 'index.html'),
        404: resolve(root, '404', 'index.html'),
        500: resolve(root, '500', 'index.html'),
        profile_edit_avatar: resolve(root, 'profile_edit_avatar', 'index.html'),
        chat_empty: resolve(root, 'chat_empty', 'index.html'),
        chat_not_empty: resolve(root, 'chat_not_empty', 'index.html'),
        add_user: resolve(root, 'add_user', 'index.html'),
        remove_user: resolve(root, 'remove_user', 'index.html'),
        temp: resolve(root, 'remove_user', 'index.html'),
      },
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer({}), cssnanoPlugin({ preset: 'default' })],
    },
  },
});
