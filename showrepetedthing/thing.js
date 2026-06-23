// write a function to show the array or string how many times come

const str="abadul"
let arr = str.split("")
const obj = {};

for(let i=0; i < arr.length; i++){
  
    
        if (obj[arr[i]]){
            obj[arr[i]]=obj[arr[i]]+1
        }
        else {
            obj[arr[i]]=1
        }
    }
     
     
     console.log(obj)
     