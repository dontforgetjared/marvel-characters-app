/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    globals: true,
  },
});
