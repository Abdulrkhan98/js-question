// ⁠JavaScript Program to Check Whether a String is Palindrome or Not.

function checkPalindrome(str){
    let store = "";

    for ( let i= str.length-1 ; i >= 0 ; i--){
    store +=  str[i
        
    ]
    }

    if (store === str){
    return true;
} else {
    return false ;
}
}

console.log(checkPalindrome("aba"))