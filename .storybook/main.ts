//import type { StorybookConfig } from '@storybook/react-webpack5';

import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const config: any = {
    framework: "@storybook/react-webpack5",
    stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    webpackFinal: async (config) => {
        if (config.resolve) {
            config.resolve.plugins = [
                ...(config.resolve.plugins || []),
                new TsconfigPathsPlugin({
                    extensions: config.resolve.extensions,
                }),
            ];
        }
        return config;
    },
};

export default config;
