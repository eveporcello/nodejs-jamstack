function* singTo({
  name,
  adjective,
  verb,
  chorus = f => f
}) {
  yield console.log(`la la la ${name}`);
  yield console.log(`${name} you're so ${adjective}`);
  yield console.log(`Can we ${verb} together forever?`);
  yield console.log(`la la la`);
  yield chorus(name);
  yield console.log(`la la la ${name}`);
  yield console.log(`${name} you're so ${adjective}`);
  yield console.log(`Can we ${verb} together forever?`);
  yield console.log(`la la la`);
  chorus(name);
  chorus(name);
  yield { done: true };
}

const song = singTo({
  name: "Florence",
  adjective: "beautiful",
  verb: "do paperwork",
  chorus(name) {
    console.log(
      `Sha na na, ${name} you're a person I know!`
    );
  }
});

const theSinging = setInterval(() => {
  const { done = false } = song.next();
  if (done) {
    clearInterval(theSinging);
    console.log("the singing has ended");
  }
}, 2000);
