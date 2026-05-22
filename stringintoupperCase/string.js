// JavaScript Program to Convert the First Letter of a String into UpperCase.

function convertUpperCase(str) {

    let result = str[0].toUpperCase() + str.slice(1);

    return result;
}

console.log(convertUpperCase("hello"));
