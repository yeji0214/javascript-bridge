const { ERROR_MESSAGE } = require("./constant/error");
const {
  checkInputBridgeRange,
  checkNotNumbersInInput,
  isInputUpOrDown,
} = require("./utils/validate");

function validateBridgeSize(userInput) {
  if (!checkNotNumbersInInput(userInput)) {
    throw new Error(ERROR_MESSAGE.notNumber);
  }
  if (!checkInputBridgeRange(userInput)) {
    throw new Error(ERROR_MESSAGE.range);
  }
}

function validateInputBridgeMoving(userInput) {
  if (!isInputUpOrDown(userInput)) {
    throw new Error(ERROR_MESSAGE.moving);
  }
}

module.exports = {
  validateBridgeSize,
  validateInputBridgeMoving,
};
