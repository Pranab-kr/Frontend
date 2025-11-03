interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

const computerExample: Computer = {
  name: "ASUS TUF",
  ram: 16,
  hdd: 500
}

console.log(computerExample.name);
console.log(computerExample.ram);
console.log(computerExample.hdd);