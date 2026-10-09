
// unknown type
// English: unknown means a value can be of any type, but you must check its type before using it.

let response:any = "42"
let numariclenght:number = (response as string).length

type Book = {
    name: string,
};
let bookstrong = '{"name":"my book"}';
let bookObject = JSON.parse(bookstrong) as Book
console.log(bookObject.name)

const inputElement = document.getElementById("username") as HTMLInputElement

let value : any

value = "aa";
value = 123
value = [1,2,3]
value.toUpperCase()

let newval : unknown

newval = "aa";
newval = 123
newval = [1,2,3]
if(typeof newval === "string"){
    newval.toUpperCase();
}

// never type

// English: never represents a value that never occurs. It is commonly used for functions that never finish normally or for values that should be impossible.

function throwError(message: string): never {
    throw new Error(message);
}

throwError("Something went wrong");
type Roll = "admin" | "user"
//type Roll = "admin" | "user" | "Superadmin"

function redarectroll(roll:Roll):void{
    if(roll === "admin"){
        console.log('my admin')
        return 
    }
     if(roll === "user"){
        console.log('my user')
        return 
    }
    roll;
}


function infiniteLoop(): never {
    while (true) {
        // This loop never ends
    }
}