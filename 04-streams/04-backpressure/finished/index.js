import { createReadStream, createWriteStream } from "fs";

const readStream = createReadStream(
  "../../../assets/tahoe-snowpack.mp4"
);

const writeStream = createWriteStream(
  "../../../assets/tahoe-snowpack-copy.mp4",
  { highWaterMark: 160000 }
);

readStream.on("data", chunk => {
  const result = writeStream.write(chunk);
  if (!result) {
    console.log("backpressure");
    readStream.pause();
  }
});
readStream.on("error", error => {
  console.log("an error occurred");
  console.error(error);
});
readStream.on("end", () => {
  writeStream.end();
});

writeStream.on("drain", () => {
  console.log("drained");
  readStream.resume();
});

writeStream.on("close", () =>
  process.stdout.write("File copied!")
);
