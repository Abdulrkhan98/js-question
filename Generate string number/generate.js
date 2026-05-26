// JavaScript Program to Generate Random String.

function randomString() {

    return Math.random().toString(36).slice(2, 8);

}

console.log(randomString());