import { Transform } from "stream";
import { createReadStream, createWriteStream } from "fs";

class ReplaceText extends Transform {
  constructor(char) {
    super();
    this.replaceChar = char;
  }

  _transform(chunk, enc, callback) {
    var transformChunk = chunk
      .toString()
      .replace(/[a-z]|[0-9]|[A-Z]/g, this.replaceChar);
    this.push(transformChunk);
    callback();
  }

  _flush(callback) {
    this.push("more stuff into the stream...");
    callback();
  }
}

let xStream = new ReplaceText("xx");

process.stdin.pipe(xStream).pipe(process.stdout);
