// ⁠JavaScript Program to Guess a Random Number.

let random = Math.floor(Math.random() *10)+1

let guess = 5;
if(guess === random){
    console.log("correct guess")
} else {
    console.log("wrong guess")
}

