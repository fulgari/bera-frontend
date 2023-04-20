// build.js
// const esbuild = require("esbuild");
// const inlineImage = require("esbuild-plugin-inline-image");
// const cssModulesPlugin = require("esbuild-css-modules-plugin");

import esbuild from "esbuild";
import inlineImage from "esbuild-plugin-inline-image";
import cssModulesPlugin from "esbuild-css-modules-plugin";
import { lessLoader } from "esbuild-plugin-less";

esbuild
  .build({
    entryPoints: ["./src/entryClient.tsx"],
    outdir: "./public/",
    minify: true,
    bundle: true,
    loader: {
      ".js": "jsx",
      ".tsx": "tsx",
      ".css": "css",
    },
    define: { 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || "production") },
    plugins: [inlineImage(), cssModulesPlugin(), lessLoader()],
  })
  .then(() => console.log("Esbuild build complete!"))
  .catch(() => process.exit(1));
