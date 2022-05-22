// #######################################################################
//                                   Variables
// #######################################################################

// Variables
let newNumber:number = 26.4
newNumber = 10
newNumber = 10.4

let newCity:string = "City Name"
newCity = "Ankara"
newCity = "Istanbul"

let isCorrect:boolean = false
isCorrect = true
isCorrect = false 
// Arrays 

let newNumbers:number[] = [1,2,3,4,5,10.4]

let numbers2:Array<number> = [1,2,3,4,5.4]

let serie:[number,string] = [2,"Ankara"]

// Enum

enum Colors{
    red,
    black,
    blue
}

let color:Colors= Colors.black

let anyValue:any = "Ankara"
anyValue = 3
anyValue = {}

let anyValue2:void = undefined

function salutes():void{
    console.log("Hello")
}
