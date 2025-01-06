const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);

    return this;
  },
  removeLink(position) {
    const indexPosition = Number(position) - 1;

    if (
      indexPosition < 0 ||
      indexPosition >= this.chain.length ||
      this.chain.length === 0 || isNaN(indexPosition)
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(indexPosition, 1);

    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();

    return this;
  },
  finishChain() {
    const chainResult = this.chain.map((chainItem) => `( ${chainItem} )`).join("~~");

    this.chain = [];

    return chainResult;
  },
};


module.exports = {
  chainMaker,
};
