// JavaScript Program to Add Key/Value Pair to an Object.

function addProperty(obj, key, value) {

    obj[key] = value;

    return obj;
}

let person = {
    name: "abdul",
    age: 23
}

console.log(addProperty(person, "city", "Mumbai"));