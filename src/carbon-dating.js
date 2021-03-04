const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(act) {
  return (act && typeof (act) === 'string' && act !== 'underfind' && +act > 0 && +act < 15) ? Math.ceil((Math.log((MODERN_ACTIVITY/(+act)))/(0.693/HALF_LIFE_PERIOD))) : false
};
