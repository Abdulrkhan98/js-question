// JavaScript Program to Count the Number of Keys/Properties in an Object.

function countKeys(obj) {

    return Object.keys(obj).length;

}

let person = {
    name: "abdul",
    age: 23,
    city: "Mumbai"
}

console.log(countKeys(person));