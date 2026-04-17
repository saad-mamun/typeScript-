function makeChai(type: string, cup: number){
    console.log(`Making ${cup} cups of ${type}`)
}
makeChai("Lemon", 4);

function newTea(type: string, price:number):string {
    return `Making ${type} with price ${price}`
}

newTea("Lemon", 15);


function getChaiPrice() : number {
    return 25
}

// kono data baire asbena
function logChai(): void {
    console.log("Chai is ready")
}


// function orderChai(type?: string){
// }

// ataka default bole
function orderChai(type: string = "MASALA" ) {

}


function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large"
}) : number{
    return 4
}