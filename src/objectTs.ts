let tea: {
  name: string;
  price: number;
  isHot: boolean;
};
tea = {
  name: "Mac Mini",
  price: 69000,
  isHot: false,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};
const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 30,
  ingredients: ["Water", "tea leaves", "ginger"],
};
 

type Cup = {size: string};
let smallCup : Cup = {size: "200ml"};
let bigCup = {size: "500ml", material: "Steel"};
smallCup = bigCup;


type Brew = {brewTime: number};
const coffee = {brewTime: 5, beans: "Arabica"};
const chaiBrew:Brew = coffee


type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "liton",
  password:"123"
};

// split 
type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
  id: string;
  items: Item[];
  address: Address[];
}


// Partial
// type Chai = {
//   name: string;
//   price: number;
//   isHot: boolean;
// };
// const updateChai = (updates: Partial<Chai>) => {
//   console.log( "Updating chai with",updates)
// }
// updateChai({price: 20})
// updateChai({isHot: false})
// updateChai({}) // Partial a empty use korle problem create kore


// Required
type ChaiOrder = {
  name?: string;
  quantity?: number;
}
const placeOrder = (order: Required<ChaiOrder>) =>{
  console.log(order)
};
// Require use korar karone value kokhono faka thakbena aboong sob value dite hobe
placeOrder({
  name: "Basundhara",
  quantity: 2
})


// Pick
type Chai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients : string[]; 
};
// Pick er modhe joyta poperty likhebe toyta value likhte hobe
type BasicChai = Pick<Chai, "name" | "price" >;
const chaiInfo: BasicChai = {
  name : "Lemon Tea",
  price: 1
}


//Omit
type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
};
//Omit er modhe ja rakhben sete bad hobe abong baki sob use kora jabe
type PublicChai = Omit<ChaiNew, "secretIngredients">;

const user: PublicChai = {
  name: "mamun",
  price: 20,
  isHot: true
}