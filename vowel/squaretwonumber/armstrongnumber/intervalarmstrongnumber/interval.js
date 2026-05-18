// JavaScript Program to Find Armstrong Number in an Interval.

function armstrongInterval(start, end) {

  for (let i = start; i <= end; i++) {

    let num = i;
    let sum = 0;

    while (num > 0) {
      let digit = num % 10;
      sum = sum + digit ** 3;
      num = Math.floor(num / 10);
    }

    if (sum === i) {
      console.log(i);
    }
  }
}

armstrongInterval(100, 500);