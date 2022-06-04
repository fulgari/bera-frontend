const esbuild = require("esbuild");
// const inlineImage = require("esbuild-plugin-inline-image");

esbuild
  .serve(
    {
      port: 9004,
      host: "localhost",
      servedir: "public",
      onRequest: (args) => {
        console.log("[serve] onRequest:", args);
      },
    },
    {
      entryPoints: ["./src/app.tsx"],
      outfile: "./public/js/app.js",
      minify: true,
      bundle: true,
      // watch: {
      //   onRebuild(error, result) {
      //     if (error) console.error("watch build failed:", error);
      //     else console.log("watch build succeeded:", result);
      //   },
      // },
      loader: {
        ".js": "jsx",
        ".tsx": "tsx",
      },
      // plugins: [inlineImage()],
    }
  )
  .catch(() => process.exit(1));
