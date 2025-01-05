const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    if (arr[i] === -1) continue;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] === -1) continue;

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        console.log("hello world");
      }
    }

    const temp = arr[i];

    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

// [2, 1, 3, 4];

// [1, 2t, 3, 4]

module.exports = {
  sortByHeight,
};
