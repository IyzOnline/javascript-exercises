const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  let initialVal = 0;

  return arr.reduce(
    (accumulator, currentValue) => accumulator += currentValue,
    initialVal
  );
};

const multiply = function(arr) {
  let initialVal = 1;
  if (arr.length === 0) {
    return 0;
  }

  return arr.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    initialVal
  );
};

const power = function(base, exponent) {
  if (exponent === 0){
    return 1;
  }

  if (base === 0) {
    return 0;
  }

  let result = base;
  for(let i = 0; i < exponent - 1; i++){
    result *= base;
  }

  return result;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
