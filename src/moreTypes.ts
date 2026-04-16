let response: any = "40";
let numericLength: number = (response as string).length;

type Book = {
  name: string;
};
let bookString = '{"name" : "Who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject);
const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;
value = "CHAI";
value = [1, 2, 3, 4];
value = 1,2,3;
value.toUpperCase();

let newValue: unknown;
newValue = 'Chai';
newValue = [1,2,3];
newValue = 1,2,3;
// newValue.toUpperCase() ATA WRONG
if(typeof newValue === "string"){
    newValue.toUpperCase();
}




// try & catch
try{

} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("Error", error)
}


const data: unknown = "Liton al mamun";
// ata wrong
// const strData: string = data 
// Force kore string(as string) kora hoyse
const strData: string = data as string


type Role = "admin" | "user";

function redirectBasedOnRole(role: Role): void {
    if(role === "admin"){
        console.log('Redirecting to admin dashboard');
        return
    } else if(role === 'user'){
         console.log("Redirecting to User dashboard");
         return;
    }
    role;
} 


function neverReturn():never{
    while(true){}
}