const sumAll = function(a, b) { //sum numbers from arr
    let sum = 0// create empty array
        if (a < 0 || b < 0){ // checking if a or b are less than 0
        return "ERROR";
    } else if (typeof a === 'string' || typeof b === 'string'){ // checking if a or b are string
        return "ERROR";
    } else if (isNaN(a) === true|| isNaN(b) === true){ // checking if a or b are numbers
        return "ERROR";
    } else if (a < b){
        for (i = a; i <= b ; i++) // loop from a to b
        sum += i; // push i into array until b
    } else if (a > b){ // swap a with b
        let swapped1 = a
        let swapped2 = b
        for (i = swapped2; i <= swapped1 ; i++) // loop from a to b
        sum += i; // push i into array until b
    } 
       return sum; // function returns new arr value
}; 



console.log(sumAll(-10, 4));


// Do not edit below this line
module.exports = sumAll;

/*
let arr = [1, 2, 3, 4]
arr.push(5, 6, 7);
console.log(arr);
*/