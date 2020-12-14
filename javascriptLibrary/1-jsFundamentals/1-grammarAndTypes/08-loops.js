/*
Loops
*/

/*
Loops offer a quick and easy way to do something repeatedly

There are many different kinds of loops but they all do roughly the same thing:
    For statement
    do while
    while
    labeled
    break
    continue
    for in
    for of
    .forEach
    .map
*/

//loop structure: a) creation of an indexing variable b) a run condition c) change to the indexing variable

//count to 10 from 0 and log the numbers:
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//loops can run infinitely
//for (let i = 0; ; i++)  {
//    console.log(i);
//}

//counts to -25 by -3, starting from 2, logs the numbers
for (let i = 2; i >= -25; i = i - 3) {
    console.log(i);
}

//display the letters in a name individuality
let name = 'Kinkade';

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

//for loops can use lots of variables:
let start = 2;
let stop = Math.floor(Math.random()*30);
let increment = 3;

/*
FOR IN LOOPS
*/
//in does not require that the thing you loop through be numbered

let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1};

for (item in student) {
    console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for (cat in catArray) {
    //console.log(cat);
    console.log(catArray[cat]);
}

//let's write a for-in loop that capitalizes the first letter of a name

let instructor = "pAul";
let capName;
for (n in instructor) {
    if (n == 0) {
        capName = instructor[n].toUpperCase();
    } else {
        capName += instructor[n].toLowerCase();
    }
}
console.log(capName);

/*
FOR OF LOOPS
*/

//of requires that your "thing" you're looping through be iterable--that means it needs to be numbered

let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1};

for (item of student) {
    console.log(item);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray) {
    console.log(cat, 'says meow');
}

