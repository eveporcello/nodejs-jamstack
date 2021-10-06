import { createReadStream, createWriteStream } from "fs";

const readFile = createReadStream(
  "../../../assets/tahoe-snowpack.mp4"
);
const writeFile = createWriteStream(
  "../../../assets/out.mp4"
);

readFile.pipe(writeFile);
