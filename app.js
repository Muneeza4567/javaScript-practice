// PRACTICE

// functions

// let number1 = +prompt("Enter the 1st number")
// let number2 = +prompt("Enter the 2nd number")


// function number (number1,number2){
//     let total = (number1+number2)
//         console.log(`the sum of num1 and num2 is ${total}`);
        
// }
// number ()


// // sum of number 

// function sum (number1,number2){
//      console.log(number1+number2);
     
// }

// sum (4,6)


// // Task 

// Dom 
// docoment object model

// function sum(){
//     let firstNumber = Number(document.getElementById("firstNum").value)
//      let secondNumber = Number(document.getElementById("secondNum").value)

//     let total = firstNumber + secondNumber
//     let result = document.getElementById("result")

//     result.innerText = `The sum is ${total}`

// }

// // CHANGE TO LOWERCASE

function lowercase(){
    let userText = document.getElementById("userText").value.toLowerCase()
    let result = document.getElementById("output")
    result.innerText = ` ${userText}`  
}

// // CHANGE TO UPERCASE

function uppercase(){
    let userText = document.getElementById("userText").value.toUpperCase()
    let result = document.getElementById("output")
    result.innerText = ` ${userText}`  
}

// // CHANGE TO CAPITILIZE


