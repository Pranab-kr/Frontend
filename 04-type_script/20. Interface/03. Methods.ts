interface PersonP {
  first: string;
  last: string;
  age: number;
  sayHello(): void;
}

function greet(person: PersonP) {
  console.log(`Hello, ${person.first} - ${person.last} age - ${person.age}`);
  person.sayHello();
}

const jhon: PersonP = {
  first: "jhon",
  last: "Don",
  age: 25,
  sayHello() {
    console.log("Hello");
  },
};

greet(jhon);
