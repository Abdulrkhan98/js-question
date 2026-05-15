// ⁠ ⁠JavaScript Program to Check Prime Number.



function chekPrime(num){
    for(let i=2;i<num ;i++){
        if(num%i===0){
            return false
        }
    }
  return  true
}



function allPrimes(start, end){
  let result = []
  for(let i=start; i<=end; i++){
    if(chekPrime(i)){
      result.push(i)
    }
  }
  
  return result
  
}

console.log(allPrimes(2,100))