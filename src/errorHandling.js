const { MESSAGE } = require("./constant/error");
const {
  checkInputBridgeRange,
  checkNotNumbersInInput,
} = require("./utils/validate");

function validateBridgeSize(userInput) {
  if (!checkNotNumbersInInput(userInput)) {
    throw new Error(MESSAGE.notNumber);
  }
  if (!checkInputBridgeRange(userInput)) {
    throw new Error(MESSAGE.range);
  }
}

module.exports = {
  validateBridgeSize,
};
