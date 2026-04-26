interface Chai {
  flavor: string;
  price: number;
  mild?: boolean;
}
const masala: Chai = {
  flavor: "masala",
  price: 10,
};

interface Shop {
  readonly id: number;
  name: string;
}
const s: Shop = { id: 1, name: "Codding off" };
// s.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

interface DicCountCalculator {
  (price: number): number;
}
const apply50: DicCountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}
const machine: TeaMachine = {
  start() {
    console.log("Machine started");
  },
  stop() {
    console.log("Machine stopped");
  },
};

// Indexable (index signature) Types
interface ChaiRating {
  [flavor: string]: number;
}
const rating: ChaiRating = {
  masala: 2.3,
  ginger: 4.5,
  lemon: 3.8,
};

// Marge hoy jai
interface User {
  name: string;
}

interface User {
  age: number;
}
const u: User = {
  name: "Saimon",
  age: 22,
};

interface A {
  a: string;
}
interface B {
  b: string;
}
interface C extends A, B {
  c: string;
}
