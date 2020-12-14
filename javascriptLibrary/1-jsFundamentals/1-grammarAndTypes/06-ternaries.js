/*
TERNARIES
*/

let x = -6;

x > 0 ? console.log('x is positive') : console.log('x is negative');

//below ifelse does the same exact thing but ternaries are more elegant

if (x > 0) {
    console.log('x is positive');
} else {
    console.log('x is negative');
}


let greeting = 'salutations!';

greeting.length > 10 ? console.log('that is a long greeting!') :
greeting.length == 10 ? console.log('your greeting is exactly 10 characters') :
console.log('what is a normal greeting');

//or

if (greeting.length > 10) {
    console.log('that is a long greeting!');
} else if (greeting.length == 10) {
    console.log('your greeting is exactly 10 characters!');  
}  else {
    console.log('what is a normal greeting?');
}