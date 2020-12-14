//getElementById

const header = document.ElementById('header');
console.log(header);

document.getElementById('header').style.color="green";
header.style.color = "pink";
header.innerText = "Hello World";

const header = document.getElementById('about-me');

//getElementsByClassName

const errorList = document.ElementsByClassName('error-list');
console.log(errorList);

errorList[1].innerText = "I changed error 2";


//Example 1 Looping
for (let i=0; i < errorList.length; i++){
errorList[i].style.color = "red";
}

//Example 2 Looping
for (error of errorList){
error.style.color = "green";
}

//Example 3 Looping forEach which you can't do
errorList.forEach((error) => (error.style.color = "purple"));

//getElementsByTagName
const tags = document.getElementsByTagName('p');
console.log(tags);

tags[0].innerText = "I changed the paragraph using getElementsByTagName!";

const listItems = document.getElementsByTagName("li");
console.log(whatever5);

listItems[0].style.fontStyle = "italic";
listItems[1].style.fontStyle = "italic";

//Instead of having to write code for 30 of these li tags potentially, we can use a loop
for (let i = 0; i < listItems.length; i++){
listItems[i].style.fontStyle = "italic";
}

//Also no Looping using forEach for getElementsByTagName


//querySelector() - only grabs the first instance it finds

//Both of the below examples return the same thing

const header = document.querySelector('h1');
console.log(header);

const header = document.querySelector('#header');
console.log(header);

const errorList = document.querySelector(".error-list");
console.log(errorList);

//to get second error list item you can right click in the inspector tool on the code in the Elements section and choose Copy selector

const errorList2 = document.querySelector("body > div > ul > li:nth-child(2)");
console.log(errorList2);


//querySelectorAll()

const headerTags = document.querySelectorAll("h1");
console.log(headerTags);

console.log(headerTags[1]);

headerTags.forEach((h) => {
h.style.color = "blue";
});

const listItems = document.querySelectorAll(".error-list");

listItems.forEach((li) => {
li.style.fontStyle = "italic";
});
