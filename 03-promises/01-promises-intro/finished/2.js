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

delay(2, (error, message) => {
  if (error) {
    console.error(error);
  } else {
    console.log(message);
  }
});
