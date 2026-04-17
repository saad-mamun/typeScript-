
type ChaiOrder = { 
    type: string; 
    sugar: number;
    strong: boolean;
    }

function makeChai(order: ChaiOrder ) {
    console.log(order)
}
function serveChai(order: ChaiOrder ) {
    console.log(order)
}




// Jokhon number string boolean likha lage tokhon type use kora lage;
type TeaRecipe = {
    water: number;
    milk: number;
};
class MasalaChai implements TeaRecipe{
    water: number = 100;
    milk: number = 50;
}



// hark code likhar somoy interface use korte hoy jamon "RandomText", 300, true asob;
interface CupSize {
  size: "Small Cup" | "Large Cup";
} 
class Chai implements CupSize{
    size: "Small Cup" | "Large Cup" = "Large Cup";
};


//  | sign dia bujshi je kono akta hobe. ata OR  er moto kaj kore
// TeaType line ta k litarel type bola hoy..
type TeaType = "Masala" | 'ginger'| 'lemon';
function orderChai(t: TeaType){
    console.log(t)
}



type BaseChai = {teaLeaves: number};
type Extra = {masala: number};
// & sign dia bujai BaseChai and Extra dutoi akshathe  use korte hobe.
type MasalaChaiTow = BaseChai & Extra;
const cup: MasalaChaiTow = {
    teaLeaves: 2,
    masala:1
}



type User = {
    username: string;
    bio?: string;

}
const u1 : User = {username: "Liton"}
const u2 : User = {username: "Liton", bio: "liton181.com"};


type Config = {
    readonly appName : string;
    age: number;
}
const cfg: Config = {
    appName : "LitonAlMamun",
    age: 21,
}
//  readonly use korar karone appName akbar usekora jabe.
// cfg.appName = "MILON"