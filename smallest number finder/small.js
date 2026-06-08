// write a function to show the smallest number in a array

function smallNum(arr){
     let store = arr[0];
     let allsmall = [];
     for(let i =1 ; i < arr.length; i++){
         if(arr[i] < store){
             allsmall.push(arr[i])
         }
     } return allsmall;
 }
 
 console.log(smallNum([12 ,22,43,11,3 ,5, 32]))