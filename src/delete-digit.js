const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  let maxNumber = -1;

  for (let i = 0; i < str.length; i++) {
    const target = str.slice(0, i) + str.slice(i + 1);

    maxNumber = Math.max(target, maxNumber);
  }

  return maxNumber;
}

deleteDigit(152);

module.exports = {
  deleteDigit,
};
