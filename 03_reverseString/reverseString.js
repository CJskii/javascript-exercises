const reverseString = function(str) {
    let newString = "";
    for (i = str.length - 1; i >= 0; i--){
        newString += str[i];
    } 
    console.log(newString);
    return newString;
};

// Do not edit below this line
module.exports = reverseString;


reverseString("Hello");

