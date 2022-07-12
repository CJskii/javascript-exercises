const palindromes = function (str) {
    let re = /[^A-Za-z0-9]/g; 
    let length = str.length;
    str = str.toLowerCase().replace(re, '')
    for (i = 0; i <= length/2; i++)
    if (str[i] !== str[length - 1 - i]){
        return false;
    }
    return true;
};

console.log(palindromes("sTRINg"));

// Do not edit below this line
module.exports = palindromes;


//palindromes('racecar') // true
//palindromes('tacos') // false