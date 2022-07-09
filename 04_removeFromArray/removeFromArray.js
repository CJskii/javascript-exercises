const removeFromArray = function(arr, ...args){
    let argsArray = Array.from(args);
    
    for (i = 0; i < arr.length; i++)
        for(j=0; j < argsArray.length; j++)
        if (arr[i] === argsArray[j]){
            arr.splice(i, 1);
            i--;
            j--;
        }
        return arr
};  



console.log(removeFromArray([1, 2, 3, 4, 5], 1, 3, 2))

//console.log(removeFromArray);

// Do not edit below this line
module.exports = removeFromArray;

//console.log(removeFromArray([1, 2, 3, 4],1, 2, 3, 4));  // should equal to [1, 4]