const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];
  let pact = false;

  for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case '--discard-next':
          if (i !== arr.length - 1) {
            i++;
            pact = true;
          }
          break;
        case '--discard-prev':
          if (i !== 0  && !pact) {
            result.pop();
          }
          break;
        case '--double-next':
          if (i !== arr.length - 1) {
            result.push(arr[i+1])
          }
          break;
        case '--double-prev':
          if (i !== 0 && !pact) {
            result.push(arr[i-1]);
          }
          break;
        default:
          result.push(arr[i]);
          pact = false;
    }
  }
  return result;
};
