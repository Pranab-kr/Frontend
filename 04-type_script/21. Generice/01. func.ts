// Regular func
// function printNum(items: number, defaultVal: number): [number, number] {
//   return [items, defaultVal];
// }
// function printStr(items: string, defaultVal: string): [string, string] {
//   return [items, defaultVal];
// }

// const numFU = printNum(23, 69);
// const numstr = printStr("hello", "Pranab");
// console.log(numFU);
// console.log(numstr);
// --------------------------------------------------

//--------------------------------------------------------
//Generice func
function uniqueDataFunc<T>(item: T, defaultVal: T): [T, T] {
  return [item, defaultVal];
}

console.log(uniqueDataFunc<number>(21, 69));
console.log(uniqueDataFunc<string>("Pranab", "Ram"));

interface Dog {
  name: string;
  bread: string;
}

const dog1 = uniqueDataFunc<Dog>(
  { name: "BOB", bread: "Labbo" },
  { name: "suna", bread: "Something" }
);
console.log(dog1);

// Random keys
function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  // console.log(keys.length);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randKey, value: obj[randKey] };
}

const stringObject = { a: "apple", b: "banana", c: "cherry" };
const result = getRandomKeyValuePair<string>(stringObject);
console.log(result);

const numberObj = { one: 1, two: 2, three: 3 };
const randomNum = getRandomKeyValuePair<number>(numberObj);
console.log(randomNum.value);

// Example -3
function filterArray<T>(
  array: T[],
  condition: (itemsTakes: T) => boolean
): T[] {
  return array.filter((item) => condition(item));
}

const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers);

// extra
// const isEven = (num: number): boolean => num % 2 === 0;

// console.log(isEven(4)); // true
// console.log(isEven(7)); // false

// Ex - 4
interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Cherry", color: "Red" },
];

const redFruits = filterArray<Fruit>(
  fruitArray,
  (fruit) => fruit.color === "Red"
);
console.log(redFruits);

// const yellowFruits = fruitArray.filter((fruit) => fruit.color === "Yellow");
// console.log(yellowFruits);
