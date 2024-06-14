import { dependencies } from './package.json';
import type { Rspack } from '@rsbuild/core';

export const mfConfig: Rspack.ModuleFederationPluginOptions = {
    name: `ASSET_${process.env.ASSET_NAME}`,
    filename: `ASSET_${process.env.ASSET_NAME}__remoteEntry.js`,
    remotes: {},
    exposes: {
      "./AppIndex": "../src/views/AppIndex",
      "./store": "../src/store/index.js",
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
      ["vue-router"]: {
        singleton: true,
        requiredVersion: dependencies["vue-router"],
      },
    },
};