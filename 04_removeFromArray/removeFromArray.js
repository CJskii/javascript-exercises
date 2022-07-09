/*  TEST 1
const removeFromArray = function(arr, arg) {
    let index = arr.indexOf(arg);
    if (index > -1){
        arr.splice(index, 1);
        return arr;
    }  
}; */

/*
test('can remove all values', () => {
    expect(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)).toEqual([]);
  });



*/

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const removeFromArray = function(arr, arg, value) {
    const filter = arr.filter((arr) => arr !== arg && arr !== value)
    return filter;    
};

/*const removeFromArray = function(array, ...args) {

    let args1 = Array.from(args);

    for (i = 0; i < array.length; i++)
        for (j = 0; j < args1.length; j++)

    if (array[i] === args1[j]) {
        array.splice(i, 1);
        i--;
        j--;
    }
    return array;
}*/

//console.log(removeFromArray);

// Do not edit below this line
module.exports = removeFromArray;

console.log(removeFromArray([1, 2, 3, 4],1, 2, 3, 4));  // should equal to [1, 4]