var operatorsObj = require('./calculations.js');
var sss = 1200;
var pagibig = 300;
var ph = 400;

console.log();
console.log(
  'The gross income is:',
  +operatorsObj.multiply(300, 4) * operatorsObj.multiply(6, 1)
);
console.log('Tax is:', +operatorsObj.divide(7200, 10));
console.log('SSS is:', +sss);
console.log('PAGIBIG fund is:', pagibig);
console.log('PhilHealth is:', ph);
console.log(
  'Total deductions is:',
  operatorsObj.add(720, 1200) + operatorsObj.add(pagibig, ph)
);
console.log(
  'The net salary is:',
  operatorsObj.subtract(
    operatorsObj.multiply(300, 4) * operatorsObj.multiply(6, 1),
    operatorsObj.add(720, 1200) + operatorsObj.add(pagibig, ph)
  )
);
console.log();
