class Dog {
  bark(): void {
    console.log("Woff..");
  }
}
class Cat {
  meow(): void {
    console.log("meow..");
  }
}

function animalSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const myDog = new Dog();
const myCat = new Cat();
animalSound(myDog);
animalSound(myCat);
