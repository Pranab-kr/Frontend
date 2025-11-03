type Mytype = string | number ;


function example(value:Mytype): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

example("Pranab");
example(20);