//import type { StorybookConfig } from '@storybook/react-webpack5';

import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import * as path from "path";

const config: any = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "@storybook/addon-webpack5-compiler-babel",
        "@chromatic-com/storybook",
    ],

    framework: "@storybook/react-webpack5",

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
    docs: {},
    typescript: {
        reactDocgen: "react-docgen-typescript",
    },
};

export default config;
