let pass: string | number = 12;

type userinfo = {
  name: string;
  age: number;
};

type acinfo = {
  id: number;
  email: string;
};

const pranab: userinfo | acinfo = {
  name: "pranab",
  age: 21,
};

console.log(pranab);

const item: (number | string)[] = [1, 2, 3, "pranab", "ram"];
console.log(item);
