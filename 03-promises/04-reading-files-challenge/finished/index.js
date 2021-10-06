import fs from "fs";
import util from "util";
import http from "http";

const readFile = util.promisify(fs.readFile);

const server = http.createServer(async (req, res) => {
  const homePage = await readFile(
    "./public/index.html",
    "UTF-8"
  );
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(homePage);
});

server.listen(3000, () =>
  console.log("http://localhost:3000")
);
