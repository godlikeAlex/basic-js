const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date) || Object.hasOwn(date, Symbol.toStringTag)) {
    throw new Error("Invalid date!");
  }

  const seasons = {
    spring: [3, 4, 5],
    summer: [6, 7, 8],
    autumn: [9, 10, 11],
    winter: [12, 1, 2],
  };

  const targetMonth = date.getMonth() + 1;

  for (const [season, months] of Object.entries(seasons)) {
    if (months.includes(targetMonth)) {
      return season;
    }
  }
}

module.exports = {
  getSeason,
};
