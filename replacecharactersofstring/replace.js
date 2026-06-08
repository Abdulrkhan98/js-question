// JavaScript Program to Replace Characters of a String.




// let str = "hello world";

// let result = str.replace("h", "y");

// console.log(result);

function reverseString(str){
  let  reversed = "";
    for (let i = str.length-1; i >=0; i--){
        reversed += str[i]
        
    }
    return reversed
}

console.log(reverseString("abdul"))











// let str="hello world"
// str.split(" ")
// console.log(str.split(" ").reverse().join())