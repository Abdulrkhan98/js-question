// write a code to generate a 6 digit Otp 

function otpGenerate(num) {
  let store = [];

  for (let i = 0; i < num; i++) {
    store.push(Math.floor(Math.random() * 10));
  }

  return store.join("");
}

console.log(otpGenerate(6));