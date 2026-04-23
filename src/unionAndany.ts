// ata number othoba string hobe ata union er rule

let subs: number | string = '1m'

// ader value ai 3 ta option er baire hobe na..
let apiRequestStatus: 'pending'| 'success' | 'pending' = 'pending';
let airlineSet: 'aisle' | 'window' | 'middle' = 'window';
airlineSet = 'aisle';


const orders = ["12", "13", "15","45","32" ];
let currentOrder: string | undefined;

for (let order of orders){
    if(order === '15'){
        currentOrder = order;
        break
    }
    currentOrder = "3";
}
console.log(currentOrder);



// ata number othoba string hobe ata union er rule
const NewOrders = ["12", "13", "15","45","32" ];
let NewCurrentOrder: string | undefined;

for (let order of NewOrders){
    if(order === '15'){
        NewCurrentOrder = order;
        break
    }
    NewCurrentOrder = "3";
}
console.log(NewCurrentOrder);