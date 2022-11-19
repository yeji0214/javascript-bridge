const { ERROR_MESSAGE } = require("./constant/error");
const {
  checkInputBridgeRange,
  checkNotNumbersInInput,
  isInputUpOrDown,
  isInputReOrQuit,
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

function validateInputRestart(userInput) {
  if (!isInputReOrQuit(userInput)) {
    throw new Error(ERROR_MESSAGE.restart);
  }
}

module.exports = {
  validateBridgeSize,
  validateInputBridgeMoving,
  validateInputRestart,
};
