// build.js
const esbuild = require("esbuild");
const inlineImage = require("esbuild-plugin-inline-image");
const cssModulesPlugin = require("esbuild-css-modules-plugin");

esbuild
  .build({
    entryPoints: ["./src/app.tsx"],
    outfile: "./public/js/app.js",
    minify: true,
    bundle: true,
    loader: {
      ".js": "jsx",
      ".tsx": "tsx",
      ".css": "css",
    },
    plugins: [inlineImage(), cssModulesPlugin()],
  })
  .catch(() => process.exit(1));
