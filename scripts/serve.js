const esbuild = require("esbuild");
// const inlineImage = require("esbuild-plugin-inline-image");

esbuild
  .serve(
    {
      port: 9004,
      host: "localhost",
      servedir: "public",
    },
    {
      entryPoints: ["./src/app.jsx"],
      outfile: "./public/js/app.js",
      minify: true,
      bundle: true,
      loader: {
        ".js": "jsx",
      },
      // plugins: [inlineImage()],
    }
  )
  .catch(() => process.exit(1));
