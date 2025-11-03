function greet (person: string = "Pranab") {
  return `Hello ${person}`
}

const res1 = greet("ram")
const res2 = greet("")

console.log(res1);
console.log(res2);