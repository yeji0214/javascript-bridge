const { ERROR_MESSAGE } = require("./constant/error");
const {
  checkInputBridgeRange,
  checkNotNumbersInInput,
} = require("./utils/validate");

function validateBridgeSize(userInput) {
  if (!checkNotNumbersInInput(userInput)) {
    throw new Error(ERROR_MESSAGE.notNumber);
  }
  if (!checkInputBridgeRange(userInput)) {
    throw new Error(ERROR_MESSAGE.range);
  }
}

module.exports = {
  validateBridgeSize,
};
