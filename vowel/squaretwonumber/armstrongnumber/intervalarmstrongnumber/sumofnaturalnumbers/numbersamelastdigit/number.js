// JavaScript Program to Check if the Numbers Have Same Last Digit

function checkLastDigit(a, b, c) {

  if (a % 10 === b % 10 && b % 10 === c % 10) {
    console.log("Same Last Digit");
  } else {
    console.log("Different Last Digit");
  }
  return checkLastDigit;

}

checkLastDigit(12, 32, 52);