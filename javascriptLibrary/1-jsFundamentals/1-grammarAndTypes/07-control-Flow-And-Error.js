/*
IF CONDITIONALS
*/

let isON = tru;

if (isOn == true){
    console.log('The light is on!');
}

if (isOn){
    console.log('The light is on, yay!');
}

let weather = 65;

if (weather < 70){
    console.log('Wear a jacket!');
}

let string = 'Tyler';

if (string === 'Tyler' || false){
    console.log('if statements and conditionals are powerful!');
}
//IF ELSE
if (weather < 70){
    console.log('Wear a jacket!');
} else {
    console.log('No jacket necessary!');
}

//you can blend complex conditionals and if-else statements based upon your need:
if (weather > 70 && typeof weather === 'number'){
    console.log('This weather is amazing!');
} else {
    console.log('Either the temperature is cool, the variable is not a string, or both');
}

//ELSE IF

//if-elseif statements can be chained

let age = 15;

if (age >= 25){
    console.log('Yay! You can rent a car');
} else if (age >= 21){
    console.log ('Yay, You can drink!');
} else if (age >= 18){
    console.log('Yay! You can vote!');
} else {
    console.log('Sorry, you are too young to do anything fun.');
}

let howMany = str.length;

//SWITCH STATEMENTS

let friend;
//let friend = 'Tom';
//let friend = 'Alex';
//The break stops the console.log from continuously running through all cases. Otherwise if we use Tom then everything underneath it will render because Tom is true.

switch(friend) {
    case 'Tom':
        console.log('Hey Tom, when will you bring sourdough bread for me?');
        break;
    case 'Ken':
        console.log('Hey Ken, do you own a wolf in your backyard');
        break;
    case 'Alex':
        console.log('Hey Alex, how many Magic cards do you own');
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}

let yep = true;

switch(typeof yep == 'string' || typeof yep == 'boolean') {
    case true:
        console.log('yep is a string or a boolean');
        break;
    default:
        console.log('yep is not a string or a number');
}