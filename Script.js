console.log('Hello world');

//Single line comment

/* Multi line comment */

//declare variable and assign value to it(Ussing "var" key word to declare varible)
var userName = "Hello JD";
var userName1;

console.log (userName);

//Getting User input Ussing "Prompt" key word
userName1 = prompt("Enter User Name: ");
console.log(userName1);

var username,address;

var num = prompt("Enter a Number: ");
console.log(num);

//while loop
var num = 1;

while(num <= 10){
    console.log(num);
    num++;
}

//for loop
for(i = 1; i<=10; i++){
    console.log("This is For Loop in JavaScript");
}

//array

var marks = [75,80,55,95];

window.alert("This is alert Message");

//Variable

//Can use (let , var , const)


//Ussing let
let age;
age = 21;
console.log(age);

let firstName = "JD";
console.log(firstName);

//*******to access the HTML file Eliment Use this  */
//-----document.getElementByID------

document.getElementById("p1").innerHTML = "This is Change Paragraph";

//get User input using pop-up Window

let getUserName = window.prompt("Enter You'r Name Here ");
console.log(getUserName);
