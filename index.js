// // //CHAPTER 3 : LOOPS AND FUNCTIONS
// // //loops : 
// // /*
// // for loop : number of times code ne run karva mate use thi che
// // */
// // for(let i = 1;i< 5 ;i++){
// // console.log("Hello World : " + i)  
// // }
// // let sum = 0
// // let n = prompt("Enter the value of n")
// // n = Number.parseInt(n)
// // for (let i = 0; i < n; i++) {
// //   sum += (i + 1)
// //   // console.log((i+1), "+")
// // }
// // console.log("Sum of first " + n + " natural numbers is " + sum);

// // //for in loop :

// // let obj = {
// //   safwan : 85,
// //   ritika : 75,
// //   shiv : 35,
// //   aman : 40,
// //   ronit : 50
// // }
// // for (let a in obj){
// //   console.log("Marks of "  +a + " are " + obj[a]);
// // }

// // //for off loop : value ne seprate form ma print karva use thi  che
// // for(let b of "safwan"){
// //   console.log(b)
// // }

// // //while loop and do...while loop
// // let n = prompt("ENter the value of n")
// // n = Number.parseInt(n);
// // let  i = 1
// // while(i < n){
// //   console.log(i)
// //   i++
// // }
// //do while loop
// // let n = prompt("ENter the value of n")
// // n = Number.parseInt(n);
// // let i = 0
// // do{
// //   console.log(i)
// //   i++
// // }while(i<n)
// const hello = () => {
//   console.log("Hey how are you. I am toh fine yaar")
//   return "hi"
// }
// //functions 
// let a = 1;
// let b = 2;
// let c = 3;

// function onePlusAverge(x,y){
//   console.log("Done");
//   return 1 + (x+y) / 2
// }
// const sum = (p, q) => {
//   return p + q
// }
// let v = hello();
// console.log(v)
// console.log("Averge " ,onePlusAverge(a,b));

// hello()

//practice test
//Q1 : Print the marks of a student in object using for loop
let marks = {
  safwan : 85,
  aman : 70,
  monika : 4,
  ronit : 50
}
for(let i = 0; i < Object.keys(marks).length;i++){
  console.log("The marks of " +Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}
// Problem No 2
for (let key in marks) {
  // console.log("The marks of " + key + " are " + marks[key])
}

// Problem No 3
let cn = 43
let i
while (i != cn) {
  console.log("Try again")
  i = prompt("Enter a number")
}
console.log("You have entered a correct number")

// Problem No 4
const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4
}

console.log(mean(4, 5, 6, 7))