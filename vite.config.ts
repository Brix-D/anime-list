import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  base: mode === 'development' ? '' : '/anime-list/',
  // GH pages
  //https://github.com/vitejs/vite/issues/9119
  build: {
    rollupOptions: {
      output: {
        sanitizeFileName: (name): string => {
          const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
          const DRIVE_LETTER_REGEX = /^[a-z]:/i;
            const match = DRIVE_LETTER_REGEX.exec(name);
            const driveLetter = match ? match[0] : '';
            // A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
            // Otherwise, avoid them because they can refer to NTFS alternate data streams.
            return driveLetter + name.substr(driveLetter.length).replace(INVALID_CHAR_REGEX, 'xxx');
        },
      },
    },
  },
}));
