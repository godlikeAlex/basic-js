const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encoded = "";
  let i = 0;

  while (i < str.length) {
    let counter = 0;
    let currentLetter = str[i];

    for (let j = i; j < str.length; j++) {
      const nextLetter = str[j];

      if (j + 1 === str.length) {
        i = str.length;
      }

      if (currentLetter !== nextLetter) {
        i = j;
        break;
      } else {
        counter += 1;
      }
    }

    encoded += counter > 1 ? `${counter}${currentLetter}` : `${currentLetter}`;
  }

  return encoded;
}

module.exports = {
  encodeLine,
};
