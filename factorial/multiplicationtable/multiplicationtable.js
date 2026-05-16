//  JavaScript Program to Display the Multiplication Table

function tableMaking(num){
    let store = [];
    let n = 10;
    for (let i = 1 ; i <= n ; i++){
        store.push(i*num)
    }
    return store
}

console.log(tableMaking(99))