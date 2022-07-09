/*  TEST 1
const removeFromArray = function(arr, arg) {
    let index = arr.indexOf(arg);
    if (index > -1){
        arr.splice(index, 1);
        return arr;
    }  
}; */

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const removeFromArray = function(arr, arg, value) {
    const filter = arr.filter((arr) => arr !== arg && arr !== value)
    return filter;    
};


//console.log(removeFromArray);

// Do not edit below this line
module.exports = removeFromArray;
// create function that takes [arr] and ...args
// function looks at [arr] and filters for given ...args
// ...args goes into different variable
// function returns [arr] without filtered values(...args) 

//filter arguments [3, 2] from [1, 2, 3, 4] and return [1, 4]

console.log(removeFromArray([1, 2, 3, 4], 3, 2));  // should equal to [1, 4]