// .⁠ ⁠JavaScript Program to Check Armstrong Number. 

function checkArmstrong(num) {
  let original = num;
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum = sum + digit ** 3;
    num = Math.floor(num / 10);
  }

  if (sum === original) {
    console.log("Armstrong Number");
  } else {
    console.log("Not Armstrong Number");
  }
}

checkArmstrong(153);