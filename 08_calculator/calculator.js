const add = function(a, b) {
  let value = a + b;
  return Number(value);	
};

const subtract = function(a, b) {
  let value = a - b;
  return Number(value);
};

const sum = function(arr) {
	let value = 0;
  for (i = 0; i < arr.length; i++){
    value += arr[i];
  } return value;
};

const multiply = function(arr) {
  let value = 1
  for (i = 0; i < arr.length; i++){
    value *= arr[i];
  } return Number(value);
};
 

const power = function(a, b) {
	let value = Math.pow(a, b);
  return value;
};

const factorial = function(num) {
	let array = []
  let value = 1
  for (i = 1; i <= num; i++)
    array.unshift(i)
  for (j = 0; j < array.length; j++){
    value *= array[j];
  } return Number(value);
};

console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
/*
arr = [5, 4, 3, 2, 1]
let i = 6
arr.unshift(i);
console.log(arr); */
