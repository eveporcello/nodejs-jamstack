import fs from "fs";
import { promisify } from "util";
let writeFile = promisify(fs.writeFile);
let unlink = promisify(fs.unlink);

let delay = time =>
  new Promise(resolves => setTimeout(resolves, time));

Promise.race([
  writeFile("readme.md", "# Hello World"),
  writeFile("readme.txt", "Hello World"),
  delay(2),
  writeFile("readme.json", '{ "hello": "world" }')
]).then(() => console.log("we did it!"));

// Promise.all([
//   unlink("readme.md"),
//   unlink("readme.txt"),
//   delay(2),
//   unlink("readme.json")
// ]).then(() => console.log("files are deleted"));
