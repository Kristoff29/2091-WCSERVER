function add(a, b) {
  sum_num = a + b;
  return sum_num;
}

function subtract(number1, number2) {
  diff_num = number1 - number2;
  return diff_num;
}
function multiply(number1, number2) {
  product_num = number1 * number2;
  return product_num;
}
function divide(number1, number2) {
  quo_num = number1 / number2;
  return quo_num;
}

module.exports = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
};
