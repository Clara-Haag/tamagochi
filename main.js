// main vars and modules importing
// TODO: const script_path = "";

import { load } from "./scripts/load.js";

// starting node.js web server
const http = require("node:http");
const fs = require("node:fs");

const hostname = "127.0.0.1";
const port = "3000";

const server = http.createServer((req, res) => {
  res.writeHead(200, "Content-Type", "text/html");

  fs.readFile("./index.html", null, function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("404 Not Found ◥(ฅº￦ºฅ)◤");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, hostname, () => {
  load();
  console.log("Running at localhost:3000");
});
