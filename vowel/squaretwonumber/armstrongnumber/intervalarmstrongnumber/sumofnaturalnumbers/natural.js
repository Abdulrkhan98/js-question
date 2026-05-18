// ⁠JavaScript Program to Find the Sum of Natural Numbers.

function sumNatural(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log(sumNatural(5));