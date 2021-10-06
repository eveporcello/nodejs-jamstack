import { createWriteStream } from "fs";

const writeToFile = createWriteStream("./file.txt");
process.stdin.pipe(writeToFile);
