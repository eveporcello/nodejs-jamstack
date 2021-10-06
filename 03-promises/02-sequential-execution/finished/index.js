import fs from "fs";
import { promisify } from "util";
let writeFile = promisify(fs.writeFile);
let unlink = promisify(fs.unlink);

let delay = time =>
  new Promise(resolves => setTimeout(resolves, time));

const doStuffSequentially = () =>
  Promise.resolve()
    .then(() => console.log("starting"))
    .then(() => delay(1000))
    .then(() => "waiting")
    .then(console.log)
    .then(() => delay(2000))
    .then(() => "waiting some more")
    .then(console.log)
    .then(() => writeFile("file.txt", "Sample File..."))
    .then(() => "file.txt created")
    .then(console.log)
    .then(() => delay(3000))
    .then(() => unlink("file.txt"))
    .then(() => "file.txt removed")
    .then(console.log)
    .catch(console.error);

doStuffSequentially()
  .then(() => console.log("again again!"))
  .then(() => doStuffSequentially())
  .then(() => console.log("ok that's enough"));
