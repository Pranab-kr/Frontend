// 1. Create a symbol with description "foo"
let sym = Symbol("foo");

// 2. Check the type of the symbol
console.log(typeof sym); // "symbol"

// 3. Create a wrapper object from the symbol (just to show type)
let symObj = Object(sym);
console.log(typeof symObj); // "object"

// 4. Create an empty object and assign a symbol property
let obj = {};
obj[Symbol("a")] = "a"; // symbol-keyed property
obj["c"] = "c"; // string-keyed property
obj["d"] = "d";
console.log(obj);

for (let i of Object.keys(obj)) {
  console.log(i); // logs only "c" and "d" — NOT the symbol
}
// for (let i in obj) {
//   console.log(i); // logs only "c" and "d" — NOT the symbol
// }


// const symbols = Object.getOwnPropertySymbols(obj);
// for (let sym of symbols) {
//   console.log(sym, obj[sym]); // logs: Symbol(a) "a"
// }
