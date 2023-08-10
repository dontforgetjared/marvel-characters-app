import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/marvel-characters-app/',
  plugins: [
    react(),
    eslint({
      cache: false,
      include: ['./src/**/*.ts', './src/**/*.tsx'],
      exclude: [],
    }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
});
