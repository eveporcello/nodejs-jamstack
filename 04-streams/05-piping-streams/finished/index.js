import { createReadStream, createWriteStream } from "fs";

const readStream = createReadStream(
  "../../../assets/tahoe-snowpack.mp4"
);

const writeStream = createWriteStream(
  "../../../assets/tahoe-snowpack-copy-2.mp4"
);

readStream.pipe(writeStream).on("error", console.error);
