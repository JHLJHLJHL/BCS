import { createServer } from "node:http";
import { readFileSync } from "node:fs";
const html = readFileSync(new URL("../dist/BCS.html", import.meta.url));
createServer((_, res) => {
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  res.end(html);
}).listen(3321, () => console.log("serving dist/BCS.html on 3321"));
