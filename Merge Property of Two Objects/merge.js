// JavaScript Program to Merge Property of Two Objects.

let person = {
    name : "abdul",
   
}

let person1 = {
    age :23
}

let result = {...person, ...person1}
console.log(result)