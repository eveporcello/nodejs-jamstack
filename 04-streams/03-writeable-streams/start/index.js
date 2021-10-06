import { createReadStream } from "fs";

const readStream = createReadStream(
  "../../../assets/Tahoe Snowpack.mp4"
);

readStream.on("data", chunk => {
  console.log("reading little chunk\n", chunk);
  console.log("size", chunk.length);
});
readStream.on("error", error => {
  console.log("an error occurred");
  console.error(error);
});
readStream.on("end", () => {
  console.log("read stream finished");
});
