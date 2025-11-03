const person: { firstName: string; lastName: string; age: number } = {
  firstName: "Pranab",
  lastName: "manna",
  age: 21,
};

console.log(person);

//factory func
function printUser(user:string): {name: string , age: number , location: string} { return {
  name: user,
  age: 21,
  location: "Indaia"
}
}

console.log(printUser("pranab"));

//Accepts all keys and values as string dont have to provide all property
// function printObject(obj: {[key: string]: string}) {
//   console.log(obj);
// }

// const user56 = {
//   name: "Pranab",
//   city: "India"
// };

// printObject(user56); // ✅ Only ONE argument: user object