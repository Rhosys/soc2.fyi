import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import RollupNodePolyFill from 'rollup-plugin-polyfill-node';
import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill';

// https://vitejs.dev/config/
// https://vitejs.dev/guide/build.html#public-base-path

export default defineConfig({
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, './src')
    }
  },
  plugins: [
    vue({
      preprocessStyles: true
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData(source, fp) {
          if (fp.endsWith('colors.module.scss')) {
            return source;
          }

          return `@use "@/styles/colors.module.scss" as *;\n\n${source}`;
        }
      }
    }
  },
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      plugins: [
        RollupNodePolyFill()
      ]
    }
  },

  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({ buffer: true })
      ]
    }
  },

  define: {
    VERSION_INFO: JSON.stringify({
      releaseDate: new Date().toISOString(),
      buildNumber: process.env.CI_PIPELINE_ID,
      buildRef: process.env.CI_COMMIT_REF_NAME,
      buildCommit: process.env.CI_COMMIT_SHORT_SHA
    }),
    DEPLOYMENT_INFO: JSON.stringify({
      FDQN: process.env.HOSTED_NAME,
      LOG_TARGET: process.env.LOG_TARGET
    })
  }
});
