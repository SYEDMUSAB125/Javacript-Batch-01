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
// function getDay(value){
// var result =  value.getDay()
// return result
// }
// var date = new Date();
// var b = getDay(date)
// if(b === 0){
//     console.log("sunday")
// }
// else{
//     console.log("check your code again")
// }
// Function and Loop:
// Write a function that takes a number as input and checks whether it's a prime number or not. Use a for loop for this task.
// function checkNumber(value){
//     for(var i = 2; i < value; i++){
//         if(value % i === 0){   
//             return "not a prime number"
//         }
//         else{
//             return "prime number"
//         }
//     }
// }
// let num = checkNumber(7)
// console.log(num);
// Function to generate a random number between 1 and 100


// Math Functions:
// Create a program that generates a random number between 1 and 100 and asks the user to guess it. Provide hints like "Too high" or "Too low" until the correct guess is made.
const generateRandomNumber=() => Math.floor(Math.random() * 100) +1 ;
const guess = +(prompt("Enter your guess:"));

function startGame() {
    const randomNumber = generateRandomNumber();
    let attempts = 0;

    console.log("Welcome to the Guessing Game!");
    console.log("I have chosen a number between 1 and 100. Try to guess it!");

    // Function to take user input and check against the random number
    function guessNumber() {
        attempts++;
        

        if (isNaN(guess)) {
            console.log("Please enter a valid number.");
            guessNumber();
        } else {
            if (guess < randomNumber) {
                console.log("Too low! Try again.");
                guessNumber();
            } else if (guess > randomNumber) {
                console.log("Too high! Try again.");
                guessNumber();
            } else {
                console.log(`Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.`);
            }
        }
    }

    guessNumber();
}


// Start the game
startGame();


