function throq(msg: string): never {
  throw new Error(msg);
}

function infinite(): never {
  while (true) {}
}

let x: never;

x = infinite();
