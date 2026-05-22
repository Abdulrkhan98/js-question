//  JavaScript Program to Check the Number of Occurrences of a Character in the String.

let str = "abadul";
let char = "a";
let count = 0;

for (let i = 0; i < str.length; i++) {

    if (str[i] === char) {
        count++;
    }

}

console.log(count);