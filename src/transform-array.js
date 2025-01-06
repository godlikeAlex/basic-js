const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let result = [];

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  for (let i = 0; i < arr.length; i++) {
    const currentArrayItem = arr[i];
    let transformItem = currentArrayItem;

    const isStart = i === 0;
    const isEnd = i === arr.length - 1;

    switch (currentArrayItem) {
      case "--discard-next":
        if (!isEnd) i += 2;
        break;
      case "--discard-prev":
        if (!isStart) result.pop();
        break;
      case "--double-next":
        if (!isEnd) {
          transformItem = arr[i + 1];
          result.push(transformItem);
        }
        break;
      case "--double-prev":
        if (!isStart) {
          transformItem = arr[i - 1];
          result.push(transformItem);
        }
        break;
      default:
        result.push(transformItem);
    }
  }

  return result;
}

console.log(transform([1, 2, 3, "--double-next"]));

module.exports = {
  transform,
};
