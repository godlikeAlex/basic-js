const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Arr = s1.split("");
  const s2Arr = s2.split("");
  let result = 0;

  for (let i = 0; i < s1Arr.length; i++) {
    const targetChar = s1Arr[i];

    console.log(targetChar);

    for (let j = 0; j < s2Arr.length; j++) {
      if (s2Arr[j] === targetChar) {
        s2Arr.splice(j, 1);
        result += 1;

        break;
      }
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount,
};
