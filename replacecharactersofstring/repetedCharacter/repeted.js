// write a program how many times a word repeted in a string 


const str = "abadul";

const obj = {};

for (let char of str) {
  obj[char] = (obj[char] || 0) + 1;
}

for (let key in obj) {
  console.log(obj[key] + key);
}