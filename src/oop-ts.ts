// class chai{
//     flaver: string;
//     price:number

//     // constructor(flaver:string, price:number){
//     //     this.flaver = flaver
//     //     this.price = 25

//     // }
//     constructor(flaver:string){
//         this.flaver = flaver
//         console.log(this)

//     }
// }

// const masalachai = new chai("green")
// masalachai.flaver = "flaver"

class chai{
    public flaver : string = "milk"
    private secretIngredients = "ginger"
    reveal(){
        return this.secretIngredients
    }
   
}

class shop{
     protected shopName = "psaura"
}
class branch extends shop{
    getName(){
        return this.shopName
    }
}
