// write a program to find a second Largest Num in a array 
function secondLargest(arr) {
  let largest = 0;
  let secondLargest = 0;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest;
}

console.log(secondLargest([10, 5, 20, 8, 15]));