const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  let arrStr = [], arrAdd = [];

  if (!repeatTimes) return '';

  for (let i = 0; i < repeatTimes; i++) {
    arrStr.push(str);
  }

  for (let i = 0; i < additionRepeatTimes; i++){
    arrAdd.push(`${addition}`);
  }

  let newArrStr = arrAdd.join(additionSeparator);

  arrStr = arrStr.map(a=> a + newArrStr);

  return arrStr.join(separator);

};
