class Person {
  name: string;
  age: number;

  constructor(name:string, age:number) {
    this.name = name;
    this.age = age;
    
  }
}

const per = new Person("pranab", 21);
console.log(per);