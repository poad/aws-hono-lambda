/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import pages from 'vite-plugin-pages';

export default defineConfig({
  plugins: [pages({
    extensions: ["tsx", "jsx"],
    importMode: 'async',
  }), solidPlugin()],
  test: {
    environment: 'jsdom',
    globals: true,
    testTransformMode: {
      web: ['*.[jt]sx?'],
    },
    setupFiles: './setupVitest.ts',
    // solid needs to be inline to work around
    // a resolution issue in vitest:
    deps: {
      inline: [/solid-js/],
    },
    // if you have few tests, try commenting one
    // or both out to improve performance:
    isolate: false,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    conditions: ['development', 'browser'],
  }
});
