// JavaScript Program to Loop Through an Object.

let person = {
    name : "abdul" ,
    age : 22
}

for (let key in person){
    console.log(key, ":", person[key]);
}