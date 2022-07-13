const fibonacci = function(num) {
    let n1 = 0;
    let n2 = 1;
    let nextTerm
    if (num < 0){ // negative
        return "OOPS";
    } else if (num > 0){ // positive
        for (i = 1; i < num; i++){
            nextTerm = n1 + n2
            n1 = n2
            n2 = nextTerm
        } return nextTerm;
    } else if (typeof num === 'string' && num == 1){ // when number is string
        for (i = 0; i < str; i++){
            nextTerm = n1 + n2
            n1 = n2
            n2 = nextTerm
        } 
        return nextTerm
    } 
    console.log(nextTerm)
};

/*let fibonacciString = function(str) {
    Number(str);
    let n1 = 0;
    let n2 = 1;
    let nextTerm
    for (i = 1; i < str; i++){
            nextTerm = n1 + n2
            n1 = n2
            n2 = nextTerm
        } let fibo = nextTerm
        return fibo;
    }     
*/

console.log(fibonacci("4"));

// Do not edit below this line
module.exports = fibonacci;


//fibonacci(4) returns the 4th member of the series 3
//fibonacci(6) returns 8

let string = "123"

//console.log(typeof string);