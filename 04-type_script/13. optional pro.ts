type UserP = {
  name: string;
  age?: number;
  readonly location: string;
};

const user: UserP = { name: "pranab", location: "India" };
// user.location = "Chaina" // Error

const user2: UserP = {
  name: "Saikat",
  age: 20,
  location: "India",
};

console.log(`Name: ${user.name}`);
console.log(`Name: ${user2.name}`);
