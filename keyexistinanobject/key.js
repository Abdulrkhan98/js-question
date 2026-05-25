// JavaScript Program to Check if a Key Exists in an Object.

function checkKey(obj, key) {

    return key in obj;
}

let person = {
    name: "Abdul",
    age: 22
};

console.log(checkKey(person, "name"));