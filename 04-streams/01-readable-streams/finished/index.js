import { Readable } from "stream";

const peaks = [
  "Tallac",
  "Ralston",
  "Rubicon",
  "Twin Peaks",
  "Castle Peak",
  "Rose",
  "Freel Peak"
];

class StreamFromArray extends Readable {
  constructor(array) {
    super({ encoding: "UTF-8" });
    this.array = array;
    this.index = 0;
  }

  _read() {
    if (this.index <= this.array.length) {
      const chunk = this.array[this.index];
      this.push(chunk);
      this.index += 1;
    } else {
      this.push(null);
    }
  }
}

const arrayStream = new StreamFromArray(peaks);

arrayStream.on("data", chunk => console.log(chunk));

arrayStream.on("end", () => console.log("done!"));
