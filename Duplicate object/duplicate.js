// write a program to to find the duplicate alphabet in a array or string 

const str="abadul"
let arr = str.split("")
const obj = {};
const duplicate = {};
for(let i=0; i < arr.length; i++){
    // console.log(arr[i])
    
        if (obj[arr[i]]){
            obj[arr[i]]=obj[arr[i]]+1
        }
        else {
            obj[arr[i]]=1
        }
    }
     console.log(obj)
     for (let key in obj){
      console.log(obj[key])
      if(obj[key]>1){
          duplicate[key] = obj[key]
          
      }
     } 
     
     console.log(duplicate)
     