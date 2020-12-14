/*
FUNCTIONS
*/

//General Ideas: at their broadest level, functions do the following:
//1) they take some input which the function will handle/proess
//2) they process the input given to them
//3) they usually, but not always, return some value
//4) they can be invoked (used) as many times as we want, cutting down on code repetition

//example one:
function newFunc(num) {
    return num + 1;
}

console.log(newFunc(7));
console.log(newFunc(10));
console.log(newFunc(11));
console.log(newFunc(-2));

//example two:
function sentence(firstName, lastName) {
    return `My first name is ${firstName} and my last name is ${lastName}`;
}

console.log(sentence('Jonathan', 'Huer'));
console.log(sentence('Tyler', 'Shelton'));
let superImportantSentence = sentence('Nicky', 'Disborough');
console.log(superImportantSentence);

//let's build a function that takes a complex type--an array in this case, and console.logs each item in the input array

let arr = [1, true, {key: 'string'}, [0, false, null], 'heya!'];
let arr2 = [5,6,7,8,9,10];

function iteratorFunc(inputArr) {
    for (let element of inputArr) {
        console.log(element);
    }
}
iteratorFunc(arr);
iteratorFunc(arr2);


/*
ARROW FUNCTIONS
*/

//normal function declaration
function coffee() {
    return 'coffee is good';
}

//normal function expression
let tea = function() {
    return 'tea is healthy';
}

console.log(coffee());
console.log(tea()); 

//arrow functions are *always* anonymous
//arrow function expression
let hotChocolate = () => {
    return 'hot chocolate is king';
}

console.log(hotChocolate());

let animals = (kittens, puppies) => {return `I have ${kittens} cat(s) and ${puppies} dog(s)`};

console.log(animals(3, 2));
console.log(animals(0, 0));

//concise vs. block 

//concise body
let apples = x => `There are ${x} apples`;
console.log(apples(10));

//block body
//return must be explicitly written in a block-body arrow function

let bananas = (x) => {
    return `There are ${bananas}`;
}
console.log(bananas(5));


let func = () => 'hi';

console.log(func());
