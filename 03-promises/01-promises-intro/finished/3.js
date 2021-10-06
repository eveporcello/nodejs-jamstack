import { promisify } from "util";

let delay = (seconds, callback) => {
  if (seconds > 3) {
    callback(new Error(`${seconds} seconds is too long!`));
  } else {
    setTimeout(
      () =>
        callback(
          null,
          `the ${seconds} second delay is over.`
        ),
      seconds * 1000
    );
  }
};

let promiseDelay = promisify(delay);

promiseDelay(2).then(console.log).catch(console.error);
