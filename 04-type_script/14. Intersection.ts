type userInfo = {
  name: string;
  age: number;
};

type acInfo = {
  id: number;
  email: string;
};

type UInfo = userInfo & acInfo;

const Pranab: UInfo = {
  name: "pranab",
  age: 21,
  id: 52725,
  email: "Pranab21@gmail.com",
};

console.log(Pranab);
