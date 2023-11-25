const add = function(numOne, numTwo) {
	return (numOne + numTwo);
};

const subtract = function(numOne, numTwo) {
	return (numOne - numTwo);
};

const sum = function(nums) {
  let sum = 0;
	for (const num of nums) {
    sum += num;
  }
  return sum;
};

const multiply = function(nums) {
  let product = 1;
  for (const num of nums) {
    product *= num;
  }
  return product;
};

const power = function(numBase, numPower) {
	return Math.pow(numBase, numPower);
};

const factorial = function(num) {
  let res = 1;
	for (let i = num; i > 0; i--) {
    res *= i;
  }
  return res;
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
