const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const caesar = function(str, numOfShiftPlaces) {
    let cipherText = '';
    for(let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);

        let isAnUpperCaseLetter = charCode >= 65 && charCode <= 90;
        let isALowerCaseLetter = charCode >= 97 && charCode <= 122;

        //determine if character is a letter
        if(isAnUpperCaseLetter || isALowerCaseLetter) {
            //do the shift
            numOfShiftPlaces = numOfShiftPlaces % 26; 
            
            let cipherLetterCharCode = charCode + numOfShiftPlaces;

            if(isAnUpperCaseLetter) {
                if(cipherLetterCharCode > 90) {
                    cipherLetterCharCode = 64 + cipherLetterCharCode - 90;
                } else if(cipherLetterCharCode < 65) {
                    cipherLetterCharCode = 90 - (64 - cipherLetterCharCode);
                }
            } else if(isALowerCaseLetter) {
                if(cipherLetterCharCode > 122) {
                    cipherLetterCharCode = 96 + cipherLetterCharCode - 122;
                } else if(cipherLetterCharCode < 97) {
                    cipherLetterCharCode = 122 - (96 - cipherLetterCharCode);
                }
            }
            cipherText = cipherText.concat(String.fromCharCode(cipherLetterCharCode));
        } else {
            cipherText = cipherText + (str.charAt(i));
        }
    }
    
    return cipherText;
}

const newCeasar = function (str, num){ // take 2 arguments
    let solved = "" // set end variable
    if (num < 0){
        num = 26 + (num % 26)
    } else if (num > 0){
        num = 26 - (num % 26);
    }
    for (let i = 0; i < str.length; i++){ // loop string array
        let asciiNum = str[i].charCodeAt(); // for each letter find ASCII number
        let newAsciiNum = asciiNum + num;  // ASCII number after shift
        // asciiNum(65) = A, asciiNum(90) = Z
        // ASCII after shift should be less than 90 and more than 65
        if ((asciiNum >= 65 && asciiNum <= 90) && newAsciiNum <= 90) {  // upper case within limits
            solved += String.fromCharCode(newAsciiNum)
        } else if ((asciiNum >= 97 && asciiNum <= 122) && newAsciiNum <= 122){ // lower case within limits
            solved += String.fromCharCode(newAsciiNum);
        } else if ((asciiNum >= 65 && asciiNum <= 90) && newAsciiNum > 90){
            solved += String.fromCharCode(newAsciiNum - 26);
        } else if ((asciiNum >= 97 && asciiNum <= 122) && newAsciiNum > 122){
            solved += String.fromCharCode(newAsciiNum - 26);
        } else {
            solved += str[i]
        }        
    } return solved;
}




let shift = 26 - (75 % 26);
let shiftminus = 26 + (-25 % 26);
console.log(shift);
//console.log(shiftminus);
//console.log(shiftedBack('W', -5));

//65 - 90 uppercase
//97 - 122 low case
//console.log(caesar('Aaa', 1))
console.log(caesar('Mjqqt, Btwqi!', -5))
console.log(caesar('Hello, World!', -29));
console.log(newCeasar('Hello, World!', 75));
console.log(caesar('Hello, World!', 75));

//console.log(wraps('ZzZzzzY', 2));

// Do not edit below this line
module.exports = caesar;