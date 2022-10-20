//hello world
console.log("hello world")
//variables
let a = 97
b = "safwan"
console.log(a)
console.log(b)
console.log("------------------")
//var , let , conts
//var : old js ma use karta hta also called global variable
// const : constant value ne pass karva mate use thi che
// let : new js ma use thi che also called blocked variables.
var a1 = "this"
let b1 = 5;
const author = 'kuldip'
{
  let b1 = 10
  console.log(b1)
}
console.log(a1)
console.log(b1)
console.log(author)
console.log("------------------")
//data types
// 1. primitive data types : null ,  number, string , symbol, undefined, boolean , bigint
// 2. not primitve data types
// object
let a2 = null;
let b2 = 345;
let c = true;
let d = BigInt("567") + BigInt("3")
let e = "Safwan"
let f = Symbol("this is symbol")
let g = undefined

console.log(a2, b2, c, d, e, f, g)
//if we check the datatype of a given variable then use
console.log(typeof e)
console.log("------------------")

//objects : key value paris is called object , real world entity 
const item = {
  name: 'safwan',
  tech: 'php',
  education: 'be',
}
//if we get a full object 
console.log(item);
//if we get a particular item in object the we use dot(.) operator
console.log(item.name);
console.log("------------------")
//practice set
//Q1 : create a string and add number
let value1 = 'safwan'
let value2 = 6
console.log(value1 + value2)
//Q2 : use typesof operator
console.log(typeof value1)
//Q3 : const object 
const student = {
  name: 'safwan',
  tech: 'php',
  education: 'be',
}
console.log(student)
//Q4 :  add new filed in studnet object
student['friend'] = 'kuldip';
console.log(student)
