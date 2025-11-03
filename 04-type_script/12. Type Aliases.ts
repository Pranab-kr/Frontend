type User = {
  name: string;
  age: number;
  location: string;
};

const printUserInfo = (user: User) => {
  return `Name: ${user.name} Age: ${user.age} location:${user.location}`;
};

const info = printUserInfo({name: "Pranab", age: 21, location: "India"});

console.log(info);

function printUser(userName:string): User { return {
  name: userName,
  age: 21,
  location: "Indaia"
}
}

console.log(printUser("pranab"));

