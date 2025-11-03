interface Ship {
  brand: string;
  start(): void;
}

// re-open / interface extention
interface Ship {
  model: string;
  stop(): void;
}

const Titanic: Ship = {
  brand: "I dont know",
  model: "Hero69",
  start() {
    console.log("Ship is staring...");
  },

  stop() {
    console.log("ship is Stopped...");
  },
};

console.log(Titanic);
Titanic.start();
Titanic.stop();
