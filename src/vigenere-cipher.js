const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (vigeneration = true) {
    this.vigeneration = vigeneration;
  }

  encrypt(message, key) {
    if (!message || !key) throw Error('Mistake!');

    let newMess = message.toLowerCase().split('');
    let newKey = key.toLowerCase();

    while(newMess.length > newKey.length){
      newKey += newKey;
    }

    newKey = newKey.split('');
    let start = 0, result = [];

    for (let el of newMess ) {
      (/[a-z]/ig.test(el)) ? result.push(String.fromCharCode((((el.charCodeAt(0) -97) + (newKey[start++].charCodeAt(0) -97)) % 26) + 97).toUpperCase()) : result.push(el)
    }

    return this.vigeneration ? result.join('') : result.reverse().join('');
  }

  decrypt(encryptMes, key) {

    if (!encryptMes || !key) throw Error('Mistake!');

    const newEnCrypt = encryptMes.toLowerCase().split('');
    let newKey = key.toLowerCase();

    while (newEnCrypt.length > newKey.length){
      newKey += newKey;
    }

    newKey = newKey.split('');
    let start = 0, result = [];

    for (let el of newEnCrypt) {
      (/[a-z]/i.test(el)) ? result.push(String.fromCharCode((((el.charCodeAt(0) -97) + (26 - (newKey[start++].charCodeAt(0) -97))) % 26 ) +97).toUpperCase()) : result.push(el)
      }

    return this.vigeneration ? result.join('') : result.reverse().join('');


  }
}
module.exports = VigenereCipheringMachine;
