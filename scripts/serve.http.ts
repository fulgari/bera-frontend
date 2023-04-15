/** 暂时用于 deploy 的原生 server 实现，静态资源缺少完备的 mime，图片路径加载不出来，后续改为用 serve.koa.ts 了 */
import http from "http";
import path from "path";
import fs from "fs";

const port = process.argv[2] || '9004';

const server = http.createServer((req, res) => {
const uri = path.basename(req.url || '');
let filename = path.join(process.cwd(), 'public', uri);

  fs.open(filename, 'r', (err, fd) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error(filename + ': does not exist');
        return;
      }

      throw err;
    }

    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    try {
      fs.readFile(filename, "utf8", function (err, file) {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.write(err + "\n");
          res.end();
          return;
        }

        const ext = path.extname(filename);
        switch (ext) {
          case 'js':
            res.writeHead(200, {
              'Content-Type': 'application/javascript'
            });
            break;
          case 'png':
            res.writeHead(200, {
              'Content-Type': 'image/png'
            });
            break;
          case 'jpg':
            res.writeHead(200, {
              'Content-Type': 'image/jpeg'
            });
            break;
          case 'css':
            res.writeHead(200, {
              'Content-Type': 'stylesheet/css'
            });
            break;
          default:
            res.writeHead(200, {
              'Content-Type': 'text/html'
            });
        }

        res.write(file, "utf8");
        res.end();
      });
    } finally {
      fs.close(fd, (err) => {
        if (err) throw err;
      });
    }
  });
});

server.listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
