import external from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";
import styles from "rollup-plugin-styles";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
export default [
    {
        input: "./src/index.ts",
        output: [
            {
                file: "dist/index.js",
                format: "cjs",
                sourcemap: true,
            },
            {
                file: "dist/index.es.js",
                format: "es",
                exports: "named",
                sourcemap: true,
            },
        ],
        plugins: [
            external(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss({
                extract: true,
            }),

            babel({
                exclude: "node_modules/**",
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-typescript",
                    "@babel/preset-react",
                ],
                plugins: [],
            }),
            resolve({
                jsnext: true,
                main: true,
                browser: true,
            }),

            commonjs(),
            styles(),
            terser(),
        ],
    },
    {
        input: "./src/index.ts",
        output: [
            {
                file: "dist/types.d.ts",
                format: "es",
            },
        ],
        plugins: [dts],
    },
];
