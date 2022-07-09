const leapYears = function(year) { // function takes year as an argument
    let divided4 = year % 4; // 
    let divided100 = year % 100;
    let divided400 = year % 400;
    let divide4 = year % 4; // integer
    let divide100 = year % 100; // not integer
    let divide400 = year % 400; // integer
    if (divide100 === 0 && divide400 === 0){
        return true;
    } else if (divide100 === 0 && divide400 > 0){
        return false
    } else if (divide4 === 0) {
        return true;
    } else if (divide4 > 0){
        return false;
    } 
};

// Do not edit below this line
module.exports = leapYears;
