// console.log('hello world');
// console.log("I like biriyani");


 // this is a comment
// window.alert("I love biriyani");
   
/* this 
is a
multiline
comment */

// A variable is a container for storing Data.
// A variable behaves as if it was the value that it contains,

// two steps
// 1. Declaration(let,var,const);
// 2. Assingment ( = assignment operator)

// let age = 24;
// age += 1;
// // age = 24;
// console.log(age);

// //   String
// let firstName = "Arun";
// console.log(firstName);

// // boolean

// let student = true;
// console.log(student);


// document.getElementById("p1").innerHTML = "Hello" + firstName;
// document.getElementById("p2").innerHTML =  "you are" + age + "years old";


// Arithematic operators (+.-.*./.%)

// It is combination of operands and operators,
//  that is values , variables, etc.,

// let students = 20;
// students = students + 1; 21
// students = students - 1; 19
// students = students * 2; 40
// students = students / 2; 10
//  let extraStudents = students % 3; 2
// console.log(extraStudents);

// Augumented operators

//  students += 1;
//  console.log(students);

//  students *= 2;
//  console.log(students);

// students -= 2;
//   console.log(students);

//   students /= 2;
//  console.log(students);

// operators precedence

// let result = 1 + 2 * (3 + 4);
// console.log(result);

// user input

// Easy way with a window expert

// let userName = window.prompt("what is your name?");
// console.log(userName);


// difficult way by using html
// let username
// document.getElementById('myButton').onclick = function() {
//     username = document.getElementById("myText").value;
//     console.log(username);

//     document.getElementById("myLabel").innerHTML = "Hello" + username;
// }

// Type conversion = change the datatype of a value to another(strings,numbers, booleans) 

// let age = window.prompt("How old are you?");
// // console.log(typeof age);
// age = Number(age);
// console.log(typeof age);
// age += 1;
// console.log("Happy Birthday!", age , "years old");


// let x;
// let y;
// let z;

// x = Number("3.14");
// y = String(3.14);
// z = Boolean('biriyani');

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// let age = "12";
// age = Number(age);
// age += 2;
// console.log(age, typeof age);


// Const

// const PI = 3.14;
// let radius;
// let circumference;

// radius = window.prompt("Enter radius of circle?");
//  radius = Number(radius);

// //  pi = 420.69;
//  circumference = 2 *  PI *radius;
//  console.log("The circumference is:", circumference);


//Math.

// let x = 3.14
// // x = Math.round(x);
// // x = Math.floor(x);
// x = Math.ceil(x);
// // x = Math.pow(x, 2);
// console.log(x);

// Hypotunese of right angle traiangle

// let a;
// let b;
// let c;

// a = window.prompt("Enter side a");
// a = Number(a);

// b = window.prompt("Enter side b");
// b = Number(b);

// c = Math.sqrt( Math.pow(a,2) + Math.pow(b,2) );

// console.log("The hypotunese is:", c);
// same problem by using html

/* document.getElementById("submitButton").onclick = function() {
    a = document.getElementById("aTextbox").value;
    a = Number(a);

    b = document.getElementById("bTextbox").value;
    b = Number(b);

    c = Math.sqrt( Math.pow(a, 2) + Math.pow(b, 2) );

    document.getElementById("cLabel").innerHTML = "side c: " +  c ;
} */


/* let count = 0;

document.getElementById("decrease").onclick = function() {
    count--;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("reset").onclick = function() {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increase").onclick = function() {
    count++;
    document.getElementById("countLabel").innerHTML = count;
} */

/* random number generator
let x;
let y;
let z;


document.getElementById("rollButton").onclick = function() {
    let x = Math.floor(Math.random() * 6) + 1 ;
    let y = Math.floor(Math.random() * 20) + 1 ;
    let z = Math.floor(Math.random() * 8) + 1 ;
    
    document.getElementById("xLabel").innerHTML = x;
    document.getElementById("yLabel").innerHTML = y;
    document.getElementById("zLabel").innerHTML = z;
} */

// useful string methods

/* let x = "Varunkumar";
console.log(x.length);
console.log(x.charAt(8));
console.log(x.indexOf("k"));
console.log(x.lastIndexOf("a"));

console.log(x.toUpperCase())
console.log(x.toLowerCase());
console.log(x.toLocaleLowerCase());
console.log(x.replace("V", "/")); */

//slice()

/* let fullName = "Varun Kumar";
let firstName = fullName.slice(0,5);
let lastName = fullName.slice(5);
console.log(firstName);
console.log(lastName); */

//method chaining: 

/* let userName = "Varun";
 let letter = userName.charAt(0).toLowerCase().trim();
 let letter = userName.trim() 
 letter = letter.toLowerCase();

console.log(letter);*/


// if statement
/*
let age = 15;
if (age>=18)
{
    console.log("You will get voter id");
} else if(age<12) {
    console.log("You are a kid");
} else {
    console.log("You must grow still");
} */

// checked property of radio button and checkboxes
/*
document.getElementById("Button").onclick = function(){

    if(document.getElementById("myCheckbox").checked) {
        console.log("You are subscribed");
    } else 

    {
        console.log("You are not subscribed");
    }

} */

// Switch statement
/*
let grade = "B"
 switch(grade){
    case "A":
        console.log("you did great!!");
        break;
        case "B":
        console.log("you did good!!");
        break;
        case "C":
        console.log("you did pass!!");
        break;
        case "F":
        console.log("you did fail!!");
        break;
        default :
        console.log("Its not a grade");
 } */       

//  logical operators(AND , OR,not)
/*
let temp = ;
if(temp > 0 || temp < 30) {
    console.log("Weather is good")
} else 
{
    console.log("Whether is bad");
} */

// loops

// while loop
/*
let username =  "";
while(username ==  "" ) {

    username = window.prompt("enter your name");

}
console.log("hey", username);
*/

// do while loop
/*
let username;
do {
    username = window.prompt("enter your name");
} while(username == "")

console.log("hello", username);*/

//for loop
/*
for(let count=10;count<=18;count++)
{
    console.log(count);
}

console.log("happy");*/

// Break and continue statement.
/*
for(let i=0;i<=10;i++)
{
    if(i==8){
        break;
    }

    console.log(i);
}
console.log("hurray")
*/

/*
let myText;
document.getElementById("evaluatedText").oninput = function() {
   let myText = document.getElementById("wordCount").innerHTML;
    console.log(myText);
} */

// for(let i = 0;i<=3;i++)
// {
//     for(let j=0;j<=3;j++){
//         console.log(j);
//     }
//     console.log(i);
// }
/*
let rows = window.prompt("Enter number of rows");
let columns = window.prompt("Enter number of columns");
for(let i = 1;i<=rows;i+=1) 

    for(let j=1;j<=columns;j+=1){
       document.getElementById("myRectangle").innerHTML += j;
    }
    document.getElementById("myRectangle").innerHTML += <br>;
*/

//functions
/*
happyBirthday();

function happyBirthday() {
console.log("happy birthday avi");
console.log("happy birthday dear");
console.log("happy birthday arun");
console.log("happy birthday gk");
} */

// returnstatementy
/*
let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("enter height");
area = getArea(width,height);
console.log(area);
function getArea(width,height) {
    let result = width*height;
    return result;
} */

// ternary operator
/*
let adult = check(24);
console.log(adult);
function check(age) {
    return age>= 18 ? true : false;
} */


//template literals
/*
let name = "arun";
let items = 3;
let total = 75; */

/*
console.log("hello", name);
console.log("your cart has", items ,"items");
console.log("your total is", total); */
/*
console.log(`hey ${name}`);
console.log(`your cart has ${items} items`);
console.log(`your total is ${total}`);

let text = `hello ${name} cart ${items} total ${total}`;
console.log(text) */

//format currency
/*
let num = 100;

// num = num.toLocaleString('en-us');
num = num.toLocaleString(undefined, {style: "percent"});
console.log(num); */


/* number guess
const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitbtn").onclick = function() {
    let guess = document.getElementById("guessfield").value;
    guesses++;
    
    if(guess == answer)
    {
        alert(`${answer} is the #`)
    }
    else if(guess<answer)
    {
        alert("to small!");
    } else {
        alert("to large!");
    }
} */

// temperature conversion
/* 
here we learnt invoke of function
document.getElementById("submitbtn").onclick = function() {
    let temp;
    if(document.getElementById("Cradio").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = toCelcius(temp);
        document.getElementById("Clabel").innerHTML = temp + "°C";
    } else if(document.getElementById("Fradio").checked) {
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("Flabel").innerHTML = temp + "F";
    } else {
        alert("error");
    }
}
 
 function toCelcius(temp) {
    return (temp-32) * (5/9);
 }
  function toFahrenheit(temp) {
    return ((9*temp)/5) + 32;
  } */


//   Arrays
/*
let sports = ["cricket","football","volleyball"];
sports.unshift("mango");
console.log(sports);
*/

//loop through an array
// for of statement
/*
let cars =["tata","maruti","mahindra"];
let text = "";
for( let i of cars){
    text += i;
} */

// sorting an Array
 /*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
fruits.reverse();
console.log(fruits); */

// 2d array = array of arrays;
/*
let fruits = ["mango","kiwi","banana"]
let meat = ["egg","fist","chicken"];

let grocerylist = [fruits,meat];
 
grocerylist[0][2] = "apple"
// console.log(grocerylist);
for ( let list of grocerylist){
    for( let food of list) {
        console.log(food);
    }
} */


// spread operator
/*
let num = [1,2,3,4,5,6,7,8,19,210];
let max = Math.max(...num);
console.log(max); */
/*
let c1 = ["bmw","rover","benz"];
let c2 = ["tata","maruti","mahindra"];
c1.push(...c2);
console.log(...c1); */

// Rest operator
/*
let a = 1;
let b = 2;
let c= 3;
let d = 5;
let e = 4;

console.log(sum(a,b,c,d));

function sum(...numbers){
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
} */

//call back

/*
let total = sum(2,3);
displaydom(total);

function sum(x,y) {
    let result =  x + y;
    return result;
} */

/*
sum(2,3, displaydom);

function sum(x,y, callBack){
    let result = x + y;
    callBack(result);

}

 function displayconsole(output) {
    console.log(output);
 } 

 function displaydom(output){
    document.getElementById("mylabel").innerHTML = output;
 } */

// array foreach()
/*
let nums = [18,34,48,60];
nums.forEach(print);

function print(index){
    console.log(index);
}                   */


// Map
/*
let nums = [1,2,3,4,5];

let squares = nums.map(square);
squares.forEach(print);

function square(element) {
    return Math.pow(element, 2);
}

function print(element) {
    console.log(element);
} */

// Array.filter

/*

let ages = [18,16,14,20,24];

let adult = ages.filter(checkage);

adult.forEach(print);

function checkage(element) {
    return element >= 18;
}
 function print(element)
 {
    console.log(element);
 } */


 //array Reduce
 /*
 let price = [10,5,20,18,12]

let total = price.reduce(checkout);

console.log(`The total is :${total}`);

 function checkout(total,element) {
    return total + element;
 } */

// sort)( ) of an array refer to w3 schools 

// function expression
/*
function say(){
    console.log("hello!!");
}
say(); */

/*
const greeting = function(){
    console.log("hello!!");
}
greeting(); */

// increment and  decrement by function expression
/*
let count = 0;

 document.getElementById("increase").onclick = function(){
    count++;
    document.getElementById("myLabel").innerHTML = count;
}

  document.getElementById("decrease").onclick = function() {
    count--;
    document.getElementById("myLabel").innerHTML = count;
} */

// Arrow function
/*
const greeting = function(name) {
    console.log(`hello ${name}`);
}
greeting("avi"); */
  /*
const greeting = (x, y) => {
    return x / y * 100;
}
console.log(`${greeting(85, 100)}%`) */

// nestedfunctions
/*
let name = "avi";

let input = 0;
 
login();                     

function login(){
displayname();
displayinput();
function displayname(){
    console.log(`hey ${name}`);
}
function displayinput(){
    console.log(`notifications ${input}`);
} 
} */
/*
function displayname(){
    console.log(`hey ${name}`);
}
 
function displayinput(){
    console.log(`notifications ${input}`);
} */
 

// object maps
/*
const fruits = new Map([
    ['apple',500],
    ['kowi',300]
]);

fruits.forEach((value, key) => console.log(`${key} & ${value}`));
other than this we have 
get
set
delete
*/

// object oriented programming

