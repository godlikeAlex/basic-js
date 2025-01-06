const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const board = Array.from(
    matrix,
    (_, index) => new Array(matrix[index].length)
  );

  function getNeighboring(targetMatrix, row, col) {
    const isUpperBorder = row === 0;
    const isLowerBorder = row === matrix.length - 1;

    const currentCell = targetMatrix[row][col];
    const nextCell = targetMatrix[row][col + 1];
    const prevCell = targetMatrix[row][col - 1];

    const topCell = !isUpperBorder ? targetMatrix[row - 1][col] : undefined;
    const bottomCell = !isLowerBorder ? targetMatrix[row + 1][col] : undefined;

    return [
      currentCell ?? 0,
      nextCell ?? 0,
      prevCell ?? 0,
      topCell ?? 0,
      bottomCell ?? 0,
    ];
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const currentNeighboring = getNeighboring(matrix, i, j);

      const bombs = currentNeighboring.reduce(
        (prevCell, currentCell) => prevCell + currentCell,
        0
      );

      if (bombs > 0) {
        board[i][j] = bombs;
      } else {
        const boardNeighboring = getNeighboring(board, i, j);
        const neighborHasBombs = boardNeighboring.some(
          (neighbor) => neighbor > 0
        );

        board[i][j] = neighborHasBombs ? 1 : 0;
      }
    }
  }

  return board;
}

module.exports = {
  minesweeper,
};
