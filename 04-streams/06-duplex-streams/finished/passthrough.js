import { PassThrough } from "stream";
import { createReadStream, createWriteStream } from "fs";

const readFile = createReadStream(
  "../../../assets/tahoe-snowpack.mp4"
);
const writeFile = createWriteStream(
  "../../../assets/out.mp4"
);

const report = new PassThrough();

readFile.pipe(report).pipe(writeFile);

let total = 0;
report.on("data", chunk => {
  total += chunk.length;
  console.log("bytes: ", total);
});
