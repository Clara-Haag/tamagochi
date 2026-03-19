// starting node.js web server
import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { extname } from "node:path";

const hostname = "127.0.0.1";
const port = "3000";

const server = createServer((req, res) => {
  let path = "." + req.url;

  if (req.url === "/") {
    path = "./index.html";
  }

  const ext = extname(path);
  const contentType =
    ext === ".js"
      ? "application/javascript"
      : ext === ".html"
        ? "text/html"
        : "text/plain";

  res.statusCode = 200;
  res.setHeader("Content-Type", contentType);

  createReadStream(path)
    .on("error", () => {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end("404 Not Found ◥(ฅº￦ºฅ)◤");
    })
    .pipe(res);
});

server.listen(port, hostname, () => {
  console.log("Running at localhost:3000");
});
