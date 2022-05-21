/*

This document includes basic syntax of Java Script ES6+ and can be used as
a cheatsheet while writing codes or to review basics. 

*/


// #######################################################################
//                                   Variables
// #######################################################################

// Variables
var variableName = "Variable Name"
var intVariable = 3
let booleanValue = true
const city = "Istanbul"


var arrays = [1, 2, 3, 4, 5, 6, 7]

// Function Declaration and function array initilization
function f1() { console.log("func1") }
function f2() { console.log("func2") }
function f3() { console.log("func3") }

var array = [f1, f2, f3]

// -----------------------------------------------------------------------
//                  Allowed and NOT Allowed manipulations
// -----------------------------------------------------------------------

var Name = "Emre"
var Name = "Ali" // With var second decleration of a variable is allowed

let Surname = "Avara"
let Surname = "New Surname" // With let this feature is not allowed

const password = "12345" // Value change is not allowed with const (However you can manipulate the referance type variables)
const password = "123456" // NOT Allowed
password = "123" // NOT Allowed

const cities = ["Istanbul", "Ankara"]
cities.push("Kayseri") // Addition to cities is allowed because we are not changing the value or address of the variable. We only add a member.
cities.pop() // Allowed
cities = ["Adana", "Antalya"] // NOT Allowed because we are addressing a new place in the memory



// #######################################################################
//                           Function Decleration
// #######################################################################

function functionName(var1, var2) {
    console.log(var1, var2)
    return true
}
// #######################################################################
//                                  Loops
// #######################################################################

// For loop
for (i = 0; i < 10; i++) {
    console.log(i)
}

// For Each loop
var numbers = [1, 2, 3, 4, 5, 6, 7, 8]

numbers.forEach(function (number) {
    console.log(number)
})

// While Loop
var i = 0
while (i <= 10) {
    console.log(i)
    i++
}

// Do-While loop
var i = 0
do {
    console.log(i)
    i++
} while (i <= 10);

// #######################################################################
//                               Class Decleration 
// #######################################################################

// Class Decleration 

var person = {
    firstName: "Name",
    lastName: "LastName",
    id: 123,
    email: "email@mail.com",
    // Function decleration in a class
    getFirstName: function () {
        return this.firstName
    }

}