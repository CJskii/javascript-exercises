const fibonacci = function(num) {
    let n1 = 0;
    let n2 = 1;
    let nextTerm
    if (num < 0){ // negative
        return "OOPS";
    }  else if (typeof num === 'string' && num == '1'){ // when number is string
        for (i = 0; i < num; i++){
            nextTerm = n1 + n2
            n1 = n2
            n2 = nextTerm
        } 
        return nextTerm
    } else if (num > 0){ // positive
        for (i = 1; i < num; i++){
            nextTerm = n1 + n2
            n1 = n2
            n2 = nextTerm
        } return nextTerm;
    }
};

console.log(fibonacci("4"));

// Do not edit below this line
module.exports = fibonacci;
