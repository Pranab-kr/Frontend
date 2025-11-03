type Employee = {
  id: number;
  name: string;
};

type Manager = {
  department: string;
  role: string;
};

type ManaAndEmployee = Employee & Manager;

const manager1: ManaAndEmployee = {
  id: 123,
  name: "Pranab kr",
  department: "IT",
  role: "Team Lead",
};

console.log(manager1.id);
console.log(manager1.department);
console.log(manager1.role);
console.log(manager1.name);
