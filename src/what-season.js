const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date)  return 'Unable to determine the time of year!';

  let month = date.getUTCMonth();
  return (month >=2 && month <=4) ? 'spring' :
        (month >=5 && month <=7) ? 'summer' :
        (month >=8 && month <=10) ? 'autumn' :
        (month ==11 || month >=0 && month < 2) ? 'winter' : 'Unable to determine the time of year!';

};
