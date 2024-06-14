//import type { StorybookConfig } from '@storybook/react-webpack5';

import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import * as path from "path";

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
        if (config.module && config.module.rules) {
            config.module.rules.push({
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                include: path.resolve(__dirname, "../"),
            });
            return config;
        }
    },
};

export default config;
