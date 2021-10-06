// Delay with a Callback

let delay = (seconds, callback) => {
  setTimeout(callback, seconds * 1000);
};

delay(1, () => {
  console.log("the delay has ended");
});

// Delay with a Promise
let promiseDelay = seconds =>
  new Promise(resolves => {
    setTimeout(resolves, seconds * 1000);
  });

promiseDelay(2)
  .then(() => "the long delay has ended")
  .then(message =>
    console.log(`message: ${message.toUpperCase()}`)
  );
