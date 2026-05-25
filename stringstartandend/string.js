// JavaScript Program to Check Whether a String Starts and Ends with Certain Characters.

function checkString(str) {

    let start = str.startsWith("h");

    let end = str.endsWith("o");

    return start && end;
}

console.log(checkString("hello"));
