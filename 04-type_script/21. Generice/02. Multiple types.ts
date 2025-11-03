function reversePair<T, U>(value1: T, value2: U): [U , T] {
  return [value2 , value1]
}

const revered = reversePair<string, number>("Hello", 20);
console.log(revered);