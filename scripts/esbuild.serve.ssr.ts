// const esbuild = require("esbuild");
// const inlineImage = require("esbuild-plugin-inline-image");
// const cssModulesPlugin = require("esbuild-css-modules-plugin");
import esbuild from "esbuild";
import inlineImage from "esbuild-plugin-inline-image";
import cssModulesPlugin from "esbuild-css-modules-plugin";
import { lessLoader } from "esbuild-plugin-less";
import fs from 'node:fs'
import liveServer from "@compodoc/live-server";
import { renderHtml } from "../ssr";

liveServer.start({
  port: 9004,
  host: "127.0.0.1",
  root: "public",
  open: true,
  ignore: "node_modules",
  wait: 0,
});

async function run() {
  const res = await esbuild.build({
    entryPoints: ["./src/app.tsx"],
    // outfile: "./public/js/app.js",
    outdir: "./public",
    minify: true,
    bundle: true,
    watch: true,
    // metafile: true,
    loader: {
      ".js": "jsx",
      ".tsx": "tsx",
      ".css": "css",
      ".jpg": "file",
    },
    define: { 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || "development") },
    plugins: [inlineImage(), cssModulesPlugin(), lessLoader()],
  })

  if (res.errors.length > 0) {
    process.exit(1)
  }

  console.log("⚡ Styles & Scripts Compiled! ⚡ ");
  res.metafile && fs.writeFileSync('meta.json', JSON.stringify(res.metafile))

  fs.rmSync('../public/index.html');
  const html = renderHtml();
  fs.writeFileSync('../public/index.html', html);
}

run()


// esbuild
//   .serve(
//     {
//       port: 9004,
//       host: "localhost",
//       servedir: "public",
//     },
//     {
//       entryPoints: ["./src/app.tsx"],
//       outfile: "./public/js/app.js",
//       minify: true,
//       bundle: true,
//       // watch: true,
//       loader: {
//         ".js": "jsx",
//         ".tsx": "tsx",
//         ".css": "css",
//       },
//       plugins: [
//         inlineImage(),
//         cssModulesPlugin(),
//         sassPlugin({
//           async transform(source) {
//             const { css } = await postcss(autoprefixer).process(source);
//           },
//         }),
//       ],
//     }
//   )
//   .catch(() => process.exit(1));
