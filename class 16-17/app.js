// // Function decleration

// function multiply (num1,num2){
//     result = num1*num2
//     return result

// }

// let product = multiply (2,5)
// console.log(product);

// //   function expression

// let multiply = function(num1,num2){
//     let result = num1*num2
//     return result    

// }


// let product = multiply(4,5)
// console.log(product);

// // arrow function 

// let multiply = (num1,num2)=> num1*num2

// let product = multiply(4,5)
// console.log(product);


// // Task

// // decleration
// // Qno:1 
// function greet(name) {
//   console.log("Hello, " + name);
// }

// // // Expression
// let greet = function (name){
//      console.log(`Hello ${name}`);
     
// }

// // // Arrow function
//  let greet = (name)=> console.log(`Hello ${name}`);
 

// // Qno:2 
// // Decleration
// function isEven(num) {
//   return num % 2 === 0;
// }

// // Expression 
//  let isEven = function (num){
//  return num % 2 === 0;
//  }

//  // Arrow function
// let isEven = (num) => num %  2=== 0;

// Qno:3 
// // 
// function square(x) {
//   return x * x;
// }

// function multiply(x, y) {
//   return x * y;
// }

// function sayHi() {
//   return "Hi!";
// }

// function getFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }

// function factorial(n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// }

// function isAdult(age) {
//   return age >= 18;
// }

// function logMessage(message) {
//   console.log(message);
// }

// let fruit = prompt("Enter any fruit name")

// switch (fruit){
//     case "banana":
//     alert("Yellow fruit");
//     break;
//     case "apple":
//     alert("Red and green fruit");
//     break;
//     default:
//     alert("Unknow fruit");
//     break;
// }

// let grade = prompt("Enter your grade")

// switch (grade) {
//     case 'A':
//         alert('Excellent')
//         break;
//     case 'B':
//         alert('well done');
//         break;
//     case 'C':
//         alert('Good');
//     case 'D':
//         alert('you are passed');
//         break;        
//     default:
//         break;
//         alert('invalid grade');
// }


// // CLASS 17

// const colors = ["Red", "Green", "yellow"]

// colors.forEach(function(text){
//     console.log(text.toUpperCase());
 

// })

// // for each
// const number = [23,52,3,93,20]

// number.forEach(function(num){
//     console.log(num);
    
// })

// const number = [23,52,3,93,20]

// let total = 0;
// number.forEach(function (num){
//     // total = total + num
//     total += num
// })

// console.log(total);

// // use for each to find and prit  all even numbers in an array
// const numbers = [1,2,3,4,5,6,7,8,9]

// numbers.forEach(function(num1){
//         if(num1 % 2 === 0){
//             console.log(num1);
            
//         }
// })


// const numbers = [1,2,3,4,5,6,7,8,9]

// numbers.forEach(function(num1){
//         if(num1 % 2 != 0 ){
//             console.log(num1);
            
//         }
// })



// const arr = ["We","are","learning", "javaScript"]

// let strings = ""
// arr.forEach(function(text){
//     strings += ` ${text} `
// })

// console.log(strings);

