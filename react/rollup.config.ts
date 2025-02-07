import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import fs from "fs";
import { RollupOptionsFunction } from "rollup";
import { dts } from "rollup-plugin-dts";

const rollupConfig: RollupOptionsFunction = () => {
  fs.rm("./dist", { recursive: true }, (err) => {
    if (err && err.code !== "ENOENT") throw err;
  });
  const packageJson = JSON.parse(
    fs.readFileSync("./package.json", { encoding: "utf8" })
  );
  return [
    {
      input: "src/index.ts",
      jsx: "react-jsx",
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: [
        {
          file: packageJson.main,
          format: "esm",
          sourcemap: true,
        },
      ],
      plugins: [
        resolve(),
        commonjs(),
        typescript(),
        babel({
          babelHelpers: "bundled",
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          presets: [
            "@babel/preset-typescript",
            "@babel/preset-react",
            ["@babel/preset-env", { useBuiltIns: "usage", corejs: "3.40" }],
          ],
          // https://github.com/rollup/rollup-plugin-babel/issues/254
          exclude: [/\/core-js\//],
        }),
      ],
    },
    {
      input: "src/index.ts",
      output: [{ file: packageJson.types, format: "esm" }],
      plugins: [dts()],
    },
  ];
};

export default rollupConfig;
