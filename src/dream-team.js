const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if (!members) return false;
  let str='';
  for (let i=0; i<members.length; i++){
    if (typeof members[i] === 'string') {
      str +=members[i].trim()[0].toUpperCase();
    }
  }
  return (str.length>0) ? str.split('').sort().join('') : false
};
