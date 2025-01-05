const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = { ...options };

  let result = "";

  //STRING PLUS00 PLUS00 PLUS**;

  for (let i = 1; i <= repeatTimes; i++) {
    let targetStr = String(str);

    for (let j = 1; j <= additionRepeatTimes; j++) {
      const additionSeparatorStr =
        j == additionRepeatTimes ? "" : additionSeparator;

      targetStr += String(addition) + additionSeparatorStr;
    }

    result += targetStr + (i === repeatTimes ? "" : separator);
  }

  return result;
}

module.exports = {
  repeater,
};
