class Human3 {
  private first: string;
  public last: string;
  protected age: number;

  constructor(first: string, last: string, age: number) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  getName(): string {
    return `${this.first} ${this.last} welcome Age: ${this.age}`;
  }

  // Add this getter method
  getAge(): number {
    return this.age;
  }
}

let p13 = new Human3("Pranab", "kr", 32);
// console.log(p1.first); // error

console.log(p13.getName())

class Per3 extends Human3 {
  constructor(first: string, last: string, age: number) {
    super(first, last,age);
  }
}

const pranb3 = new Per3("Pranab"," kr", 20);
console.log(pranb3.getName());
console.log(pranb3.getAge()); // Now this works
// console.log(pranb3.first); // error

