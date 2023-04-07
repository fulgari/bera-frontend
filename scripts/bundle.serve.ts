import liveServer from "@compodoc/live-server";

liveServer.start({
  port: 9004,
  host: "localhost",
  root: "public",
  open: true,
  ignore: "node_modules",
  wait: 0,
});
