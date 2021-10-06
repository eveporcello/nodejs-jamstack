import { createReadStream, createWriteStream } from "fs";

const readStream = createReadStream(
  "../../../assets/tahoe-snowpack.mp4"
);

const writeStream = createWriteStream(
  "../../../assets/tahoe-snowpack-copy.mp4"
);

readStream.on("data", chunk => {
  writeStream.write(chunk);
});
readStream.on("error", error => {
  console.log("an error occurred");
  console.error(error);
});
readStream.on("end", () => {
  writeStream.end();
});

writeStream.on("close", () =>
  process.stdout.write("File copied!")
);
