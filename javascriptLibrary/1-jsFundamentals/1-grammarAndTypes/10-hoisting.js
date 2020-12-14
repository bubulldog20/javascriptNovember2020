/*
HOISTING
*/

//Always define and intialize the variable before you call it, otherwise you may get undefined

//Run the below to see what happens in each example

//example 1:
console.log(scissors);
var scissors = 'blue';

//example 1 breakdown:
var scissors;
console.log(scissors);
scissors = "blue";

//example 2:
function hoistTest() {
    console.log(testVar);
    testVar = 10;
    console.log(testVar);
}

hoistTest();

//example 2 breakdown:

function hoistTest() {
    var testVar;
    console.log(testVar);
    testVar = 10;
    console.log(testVar);
}

hoistTest();
