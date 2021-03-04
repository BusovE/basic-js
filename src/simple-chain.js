const CustomError = require("../extensions/custom-error");

const chainMaker = {
  connection : '~~',

  chain: [],

  getLength() {
    return this.chain.getLength;
  },

  addLink(value) {
       this.chain.push('( ' + value + ' )');
       return this;
  },

  removeLink(position) {
    if (position >0 && position <= this.chain.length) {
      this.chain.splice(position-1, 1);
      return this;
    }
    this.chain = [];
    throw new Error();
  },

  reverseChain() {
     this.chain.reverse();
     return this;
  },

  finishChain() {
   let newChain =  this.chain.join(this.connection);
   this.chain = [];
   return newChain;
  }
};

module.exports = chainMaker;
