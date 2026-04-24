const chaiFlavours: string[] = ["Masala", "Adrak","Lemon"];
const chaiPrice: number[] = [10, 20];
// nicher taw array
const rating: Array<number> = [4.5, 6.3, 4];

type Chai = {
  name: string;
  price: number;
};
const menu: Chai[] = [
  { name: "Masala", price: 15 },
  { name: "Ada", price: 25 },
];

const cities: readonly string[] = ["Dhaka", "Rajshahi"];
// cities.push("D");




// to-dymention array
const table: number[][] = [
  [1, 2, 3],
  [6, 5, 3],
];

// Tuples.............................
let chaiType: [string, number, boolean];
chaiType = ["lemon", 2, true];

const ourReadonlyTuple: readonly [number, boolean, string] = [
  5,
  true,
  "The Real Coding God",
];
const chaiItems : [name:string, price: number] = ['Masala', 23];



// enum.....................................
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}
const size = CupSize.LARGE;

// auto declear korbe
enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCELED //102
};


enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}
function makeChai(type: ChaiType){
    console.log(`Making: ${type}`);
}
makeChai(ChaiType.GINGER);

let t: [string, number] = ["Chai", 10];
t.push("extra")