// JavaScript Program to Find the Factorial of a Number. 

function factorial(n) {
  let num = 1;

  for (let i = 1; i <= n; i++) {
    num = num * i;
  }

  return num;
}

console.log(factorial(5));