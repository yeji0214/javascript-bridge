const { RANGE } = require("../constant/input");

const checkInputBridgeRange = (userInput) =>
  +userInput >= RANGE.min && +userInput <= RANGE.max;

module.exports = {
  checkInputBridgeRange,
};
