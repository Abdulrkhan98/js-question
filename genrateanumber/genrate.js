//  ⁠JavaScript Program to Generate a Random Number.



function generateRandomNumber() {
  
  let randomNumber = Math.floor(Math.random() * 101);

  return randomNumber;
}

console.log("Random Number:", generateRandomNumber());