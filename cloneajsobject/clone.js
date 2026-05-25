// JavaScript Program to Clone a JS Object.
// 1st Method → Manual Copy

let person = {
    name: "abdul",
    age: 23
}

let copy = {
    name: "abdul",
    age: 23
}

console.log(copy);

// 2nd Method → Spread Operator

let person = {
    name: "abdul",
    age: 23
}

let copy = { ...person }

console.log(copy);