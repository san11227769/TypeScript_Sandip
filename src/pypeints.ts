// infers
let name = "sandip"; // TypeScript infers string
let age = 7;         // TypeScript infers number

age = 10;            // Valid
// age = "seven";    // Error: string is not assignable to number

// TypeScript automatically infers the types from the assigned values. You don't need to explicitly write the types.

// Type Annotation
let adress:string = "Sonatala howrah"
let picode:number = 711412

// Type Annotation is the process of explicitly specifying a variable's data type using a type such as string, number, or boolean.

// Union & Any

// any: Allows values of any type without normal type checking.

let sub: number | string = '10M'
// Definition: A Union Type allows a variable to hold values of more than one specified type.
// Explanation: Here, sub can store either a number or a strin

sub = 100;    // Valid
sub = "10M";  // Valid
// sub = true; // Error

let getAp: "pending" | "success" | "error" = "pending"
// Definition: A Literal Type restricts a variable to specific allowed values.
//Explanation: Here, getAp can contain only "pending", "success", or "error".


const orders = ['10', '20', '28', '30']
let curentorder: string |undefined

for (const order of orders) {
    if(order === '28'){
        curentorder = order
    }
    
}
console.log(curentorder)

// What is a Type Guard in TypeScript?

// Definition (Plain English): A Type Guard is a condition or check that helps TypeScript identify the specific type of a variable at runtime.

function newValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

newValue("sandip"); // SANDIP
newValue(100);      // 100.00
/* 
How it works:

typeof value === "string" checks whether the value is a string.

Inside the if block, TypeScript knows value is a string.

Inside the else block, TypeScript knows value is a number.

Here, typeof is used as a Type Guard.
*/

// Type Narrowing in TypeScript

// Definition (Plain English): Type Narrowing is the process of reducing a variable's possible types to a more specific type by checking its value or type.


function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

printValue("sandip"); // SANDIP
printValue(10);       // 10.00


// What is Exhaustive Checking?

// Definition (Plain English): Exhaustive checking ensures that every possible case in a union type has been handled.

type Status = "pending" | "success" | "error";

function checkStatus(status: Status): string {
    switch (status) {
        case "pending":
            return "Please wait";

        case "success":
            return "Completed";

        case "error":
            return "Something went wrong";

        default: {
            const exhaustiveCheck: never = status;
            return exhaustiveCheck;
        }
    }
}

let cstatus = checkStatus("success")
console.log(`... ......... ......... ${cstatus}`)

// Union & any





