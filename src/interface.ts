type companyDetails = {
    type: string, 
    roll: number, 
    status: boolean
}
type sandip = {
    sandip : "roll" | "name"
}
function mackcompany(order:companyDetails){
console.log(order)
}
class newcompany implements companyDetails{
    type = "psAura";
    roll =  28;
    status = true
}
// class newcompany implements sandip{
//     sandip = "roll";
// }
// function mackcompany2(order:sandip){
// console.log(order)
// }
// What is an Interface?
//  An interface in TypeScript defines the structure of an object by specifying its properties and their types.

interface User {
    name: string;
    age: number;
    isActive: boolean;
}

const user1: User = {
    name: "Sandip",
    age: 25,
    isActive: true
};

console.log(user1.name);     // Sandip
console.log(user1.age);      // 25

// Union
// A Union Type allows a variable to hold a value of one of several specified types.

type TeeType = "masala" | "ginger" | "green"
 function orderchai(t:TeeType){
    console.log(t)
 }

// Intersection Type
// An Intersection Type combines multiple types into one type. The resulting value must satisfy all the combined types.

type baseChai = {teeLavel:number}
type Extra = {masala:number}

type bestTee = baseChai & Extra
const cup:bestTee = {
    teeLavel:2,
    masala:1
}
console.log(cup)


// Optional Property (?)
// An optional property does not have to be provided when creating an object.
type Usernew = {
    name: string;
    age: number;
    email?: string;
};

const usernew1: Usernew = {
    name: "Sandip",
    age: 25
};

const user2: Usernew = {
    name: "Peu",
    age: 24,
    email: "peu@example.com"
};

console.log(usernew1);
console.log(user2);


//   Property
// A readonly property can be assigned when an object is created, but it cannot be reassigned afterward.


type Employee = {
    readonly id: number;
    name: string;
};

const emp: Employee = {
    id: 101,
    name: "Sandip"
};

emp.name = "Rahul"; // Allowed

// emp.id = 102; // Error: readonly property
console.log(emp);