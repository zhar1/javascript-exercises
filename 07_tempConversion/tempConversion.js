const convertToCelsius = function(num) {
  let celcius = (num - 32) * (5/9);
  return (celcius % 1 === 0 )? celcius: +celcius.toFixed(1);
};

const convertToFahrenheit = function(num) {
  let fahrenheit = ((num * (9/5)) + 32);
  return (fahrenheit % 1 === 0)? fahrenheit: +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
