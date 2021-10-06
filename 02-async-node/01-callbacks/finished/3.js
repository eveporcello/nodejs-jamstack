function singTo(name, adjective, verb, chorus) {
  console.log(`la la la ${name}`);
  console.log(`${name} you're so ${adjective}`);
  console.log(`Can we ${verb} together forever?`);
  console.log(`la la la`);
  chorus();
  console.log(`la la la ${name}`);
  console.log(`${name} you're so ${adjective}`);
  console.log(`Can we ${verb} together forever?`);
  console.log(`la la la`);
  chorus();
  chorus();
}

singTo("Florence", "beautiful", "do paperwork", () =>
  console.log("Sha na na, you're a person I know!")
);
