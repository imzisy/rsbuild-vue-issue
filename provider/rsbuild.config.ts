import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import path from 'node:path';
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

import { dependencies } from "./package.json";

export default defineConfig({
  source: {
    // include: ["src/**/*.{vue,js,ts,jsx,tsx,css,scss,sass,less,styl}"],
    entry: {
      index: "./src/main.js",
    },
    define: {
      'process.env': JSON.stringify(process.env)
    }
  },
  server: {
    port: 3001,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production build, you need to configure output.assetPrefix
    assetPrefix: `http://localhost:3001`,
  },
  output: {
    assetPrefix: '/',
    filenameHash: true,
    inlineStyles : true,
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      // Will work in dev only if set to "/"
      config.resolve ||= {};
      config.resolve.alias ||= {};
      config.output ||= {};
      // config.output.publicPath = "/";
      // path.resolve(__dirname, "./auth/js"),
      config.resolve.alias['@'] = path.resolve(__dirname, "src");
      config.resolve.alias['@/'] = path.resolve(__dirname, "src");
      config.resolve.alias['auth/js'] = path.resolve(__dirname, "./auth/js");
      config.resolve.alias['config'] = path.resolve(__dirname, "config");
      appendPlugins([
        new ModuleFederationPlugin({
          name: `ASSET_HOST`,
          filename: `remoteEntry.js`,
          exposes: {
            "./AppIndex": "./src/views/AppIndex",
            "./store": "./src/store/index",
          },
          shared: {
            vue: {
              singleton: true,
              requiredVersion: dependencies.vue,
            },
            vuex: {
              singleton: true,
              requiredVersion: dependencies.vuex,
            },
          },
        }),
      ]);
    },
  },
  plugins: [pluginVue()],
});
