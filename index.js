// CHAPTER 2 : operator and expression 
console.log("Hello world!");
console.log("Operators in Js")
// Arithmetic Operators 
let a = 10;
let b = 4;
console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a / b = ", a / b)
console.log("a ** b = ", a ** b)
console.log("a % b = ", a % b)
console.log("++a = ", ++a)
console.log("a++ = ", a++)
console.log("--a = ", --a)
console.log("a-- = ", a--)
console.log("a = ", a)
console.log("a-- = ", a--)

// Assignment Operators 
let assignment = 1;
assignment += 5 // same as assignment = assignment + 5
console.log("a is now = ", a)
assignment -= 5 // same as assignment = assignment - 5
console.log("a is now = ", a)
assignment *= 5 // same as assignment = assignment * 5
console.log("a is now = ", a)
assignment /= 5 // same as assignment = assignment / 5
console.log("a is now = ", a)

// Comparison Operators 
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)

// Logical Operators
let x = 5;
let y = 6;
console.log(x < y && x == 5)
console.log(x > y || x == 5)
console.log(!false)
console.log(!true)

// Comments
// This is a single line comment
/* This is a sample multiline comment and a tutorial
from 
codewithharry */

//conditionals 
//prompt : user pase thi input lese
//alert : input aapse
let con = prompt("Your Age");
//String to number convert karse
con = Number.parseInt(con);
console.log(con);
if (con < 0) {
  alert("Accept");
} else if (con < 9) {
  alert("your age is to small");
} else if (con < 18) {
  alert("your age is lest then one year")
} else {
  alert("not applicable")
}
console.log("Done");
//ternaray operator
console.log("You can", (con < 18 ? "not drive" : "drive"))

//practice set 
//Q1 : USING logical operator age is 10 to 20
let age = prompt("Your Age is ")
if (age > 10 && age < 20) {
  console.log("Your age is lies between 10 to 20 ")
} else {
  console.log("Your age is not lies between 10 to 20 ")
}
//Q2 : switch case
let car = "Honda"
switch (car) {
  case "volvo":
    console.log("Volvo car");
    break;
  case "BMW":
    console.log("bmw car");
    break;
  case "Honda":
    console.log("honda car");
    break;
  case "Tata":
    console.loh("Tata car");
    break;
  default:
    console.log("Not Found");
}

//q3 : if number is divisiable by 2 and 3
let num = prompt("What is your age?");
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("your number is divisible by 2 and 3");

} else {
  console.log("your number is  not divisible by 2 and 3");

}
//Q4 : if number 2 or 3 divisable 
let num1 = prompt("What is your age?");
num1 = Number.parseInt(num1)
if (num1 % 2 == 0 || num1 % 3 == 0) {
  console.log("your number is divisible by 2 and 3");

} else {
  console.log("your number is  not divisible by 2 and 3");
}
//Q5 : check age
let age1 = 28;
if (age1 > 18) {
  console.log("Your can drive")
} else {
  console.log("You can not drive");
}