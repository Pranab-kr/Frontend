// Getter And Setter useing
class Box<T> {
  private content: T;

  constructor(initialCOntent: T) {
    this.content = initialCOntent;
  }

  get Content(): T {
    return this.content;
  }

  set Content(newContent: T) {
    this.content = newContent;
  }
}

const stringBox = new Box<string>("hello, Pranab")
console.log(stringBox.Content);

stringBox.Content = "Updated value!";
console.log(stringBox.Content); // Output: Updated value!



// Or Normal access by Methods
// class Box<T> {
//   private content: T;

//   constructor(initialContent: T) {
//     this.content = initialContent;
//   }

//   getContent(): T {
//     return this.content;
//   }

//   setContent(newContent: T): void {
//     this.content = newContent;
//   }
// }

// const stringBox = new Box<string>("hello, Pranab");
// console.log(stringBox.getContent()); // ✅ Correct method call




