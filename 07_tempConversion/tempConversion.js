let tempF = 32
let tempC = 0

const ftoc = function(tempF) {
  let celcius = (5/9) * (tempF - 32);
  celcius = celcius.toFixed(1);
  return Number(celcius);
};

const ctof = function(tempC) {
  let fahrenheit = 32 + (tempC * 1.8);
  fahrenheit = fahrenheit.toFixed(1);
  return Number(fahrenheit);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
