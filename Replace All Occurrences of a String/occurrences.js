// JavaScript Program to Replace All Occurrences of a String.

// 1st method replace all 
// function replaceString(str) {

//     return str.replaceAll("hello", "hi");

// }

// console.log(replaceString("hello world hello"));

// 2nd method split() + join()

// function replaceString(str) {

//     return str.split("hello").join("hi");

// }

// console.log(replaceString("hello world hello"));

// 3rd and best Method 

function replaceString(str, oldWord, newWord) {
  return str.replaceAll(oldWord, newWord);
}

console.log(
  replaceString(
    "I like JavaScript. JavaScript is awesome.",
    "JavaScript", "JS"
  )
);