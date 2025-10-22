// --- DESTRUCTURING ---
// Destructuring allows us to "unpack" values from data-structures (Arrays, objects)
// into separate distinct variables.

// --------------------------------
// Basic variable assignment
const foo1 = ["one", "two", "three"];
const [red, yellow, green] = foo1;
console.log(red);   // "one"
console.log(yellow); // "two"
console.log(green);  // "three"
// --------------------------------

// --------------------------------
// Destructuring with fewer elements
const foo2 = ["one", "two"];
const [r, y, g, b] = foo2;
console.log(r); // "one"
console.log(y); // "two"
console.log(g); // undefined
console.log(b); // undefined
// --------------------------------

// --------------------------------
// DEFAULT VALUES
let a1, b1;
[a1 = 5, b1 = 7] = [1];
console.log(a1); // 1
console.log(b1); // 7
// --------------------------------

// --------------------------------
// Swapping variables
let a2 = 1;
let b2 = 3;
[a2, b2] = [b2, a2];
console.log(a2); // 3
console.log(b2); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]
// --------------------------------

// --------------------------------
// Parsing an array returned from a function
function f1() {
  return [1, 2];
}
let a3, b3;
[a3, b3] = f1();
console.log(a3); // 1
console.log(b3); // 2
// --------------------------------

// --------------------------------
// Ignoring some returned values
function f2() {
  return [1, 2, 3];
}
const [a4, , b4] = f2();
console.log(a4); // 1
console.log(b4); // 3

const [c1] = f2();
console.log(c1); // 1
// --------------------------------

// --------------------------------
// Assigning the rest of an array to a variable
const [a5, ...b5] = [1, 2, 3];
console.log(a5); // 1
console.log(b5); // [2, 3]
// --------------------------------
