const esbuild = require("esbuild");
const inlineImage = require("esbuild-plugin-inline-image");
const cssModulesPlugin = require("esbuild-css-modules-plugin");
const liveServer = require("@compodoc/live-server");

liveServer.start({
  port: 9004,
  host: "localhost",
  root: "public",
  open: true,
  ignore: "node_modules",
  wait: 0,
});

esbuild
  .build({
    entryPoints: ["./src/app.tsx"],
    outfile: "./public/js/app.js",
    minify: true,
    bundle: true,
    watch: true,
    loader: {
      ".js": "jsx",
      ".tsx": "tsx",
      ".css": "css",
    },
    plugins: [inlineImage(), cssModulesPlugin()],
  })
  .then(() => console.log("⚡ Styles & Scripts Compiled! ⚡ "))
  .catch(() => process.exit(1));

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
