interface MathExe {
  (x: number, y: number): number;
}

const addition: MathExe = (a, b) => a + b;
console.log(addition(5, 5));

const sub: MathExe = function (a, b) {
  return a - b;
};

console.log(sub(6,5));
