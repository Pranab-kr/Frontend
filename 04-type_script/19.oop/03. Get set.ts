class Myclass {
  private _myProperty: number = 0;

  
  get myProperty(): number {
    return this._myProperty;
  }

  set myProperty(value: number) {
    this._myProperty = value;
  }
}

const myCLs = new Myclass();

console.log(myCLs.myProperty);

myCLs.myProperty = 10;
console.log(myCLs.myProperty);