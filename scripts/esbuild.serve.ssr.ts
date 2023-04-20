// const esbuild = require("esbuild");
// const inlineImage = require("esbuild-plugin-inline-image");
// const cssModulesPlugin = require("esbuild-css-modules-plugin");
import esbuild from "esbuild";
import inlineImage from "esbuild-plugin-inline-image";
import cssModulesPlugin from "esbuild-css-modules-plugin";
import { lessLoader } from "esbuild-plugin-less";

async function run() {
  const res = await esbuild.build({
    entryPoints: ["./src/entryServer.tsx"],
    // outfile: "./public/js/app.js",
    outdir: "./public",
    bundle: true,
    // metafile: true,
    target: 'node12',
    platform: 'node',
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

  console.log("⚡ entryServer Compiled! ⚡ ");
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
//       entryPoints: ["./src/entryClient.tsx"],
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
