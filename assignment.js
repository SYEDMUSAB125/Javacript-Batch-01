// Function and Loop:
// Create a function that calculates the factorial of a given number using a while loop.

// function factorial(5) {
//     var result = 1;
//     while (number > 0) {

//         result = result * number;
//         number--;
//     }
//     return result;
// }

// var a=factorial(5);
// console.log(a);
// Q3:
// String Manipulation:
// Write a function that takes a string as input and returns the reversed string.
        
// function revString(value){
//  var b = value.reverse();
//  return b
// } 
// var arr = ["m","u","s","a","b"]
// var b = revString(arr)
// console.log(b)

// Q2 
// Date Manipulation:
// Write a function that takes a date as input and returns the day of the week.
function getDay(value){
var result =  value.getDay()
return result
}
var date = new Date();
var b = getDay(date)
if(b === 0){
    console.log("sunday")
}
else{
    console.log("check your code again")
}
