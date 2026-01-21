// class Chai {
//     flavour: string;
//     price: number

//     // constructor(flavour: string, price: number){
//     //     this.flavour = flavour,
//     //     this.price = price
//     // }

//     constructor(flavour: string){
//         this.flavour = flavour,
//         console.log(this)
//     }
// }
// const masalaChai = new Chai("Ginger")
// masalaChai.flavour = "Masala";

class Chai {
    public flavor: string = "Masala"
    private secretIngredients = "Cardamon"
    reveal(){
        return this.secretIngredients // ok
    }
  
}
// const c = new Chai()


class Shop {
  protected shopName = "Chai Corner";
}
class Branch extends Shop {
    getName(){
        return this. shopName // ok
    }
}

class Walet{
    #balance = 1000

    getBalance(){
        return this.#balance
    }
}
const w = new Walet()



class Cup{
    readonly capacity: number = 250

    constructor(capacity: number){
        this.capacity = capacity
    }
}

class ModernChai {
    private _sugar = 2 

    get sugar(){
        return this._sugar
    }
    set sugar(value: number) {
        if (value > 5) throw new Error("Too Sweet");
        this._sugar = value
    }
}

const c = new ModernChai();
c.sugar = 3

class EkChai {
    static shopName = "Chaicode caffe"
    constructor(public flavour: string){}
}
console.log(EkChai.shopName)


abstract class Dirnk{
    abstract make(): void
}

class MyChai extends Dirnk{
    make() {
        console.log("Brewing chai")
    }
}