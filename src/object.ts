// const chai ={
//     name: "masala",
//     price:12,
//     isHot:true
// }

// let tea:{
//     name: string;
//     price:number;
//     isHots: boolean
// }

// tea = {
//     name:"Sandip",
//     price: 12,
//     isHots: true
// }

// type Tea = {
//     name: string;
//     price:number;
//     isHots: boolean
//     ingidianc:string[]
// }

// const sandip:Tea = {
//     name: "papai",
//     price:12,
//     isHots: true,
//     ingidianc:["one","two","three"]
// }
// Duck Typing means an object is compatible with a type if it has the required properties and methods, regardless of its declared type.
// type User = {
//   name: string;
//   age: number;
// };

// const person = {
//   name: "Sandip",
//   age: 32,
//   city: "Kolkata"
// };

// const user: User = person;

// console.log(user.name); // Sandip

// type chai ={
//     name: string
//     price:number,
//     isHot:true
// }
// const updatChai = (update: Partial<chai>) =>{
//     console.log(updatChai)

// }

// updatChai({price:13})

type test ={
    name?:string
    number?:number
}

const mytest = (lick: Required<test>) =>{
    console.log(lick)
}
mytest({name:"sandip", number:5})



// Required: The Name field is mandatory. If the user leaves it empty, the system shows an error.
// Required = Must have
// type User = {
//   name: string;
//   email: string; // Required field
// };

// const user: User = {
//   name: "Sandip",
//   email: "sandip@gmail.com",
// };

// console.log(user);


// Partial: You have tested 5 out of 10 test cases. Testing is partially completed.
// Partial = Not complete
type User = {
  name: string;
  email: string;
  age: number;
};

const user: Partial<User> = {
  name: "Sandip",
};

console.log(user);

// Pick: Select Required from a dropdown menu.
// Pick = Choose
type User2 = {
  name: string;
  email: string;
  age: number;
};

type UserName = Pick<User2, "name">;

const userName: UserName = {
  name: "Sandip",
};

console.log(userName);