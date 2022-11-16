const { MESSAGE } = require("./constant/error");
const { checkInputBridgeRange } = require("./utils/validate");

function validateBridgeSize(userInput) {
  if (!checkInputBridgeRange(userInput)) {
    throw new Error(MESSAGE.range);
  }
}

module.exports = {
  validateBridgeSize,
};
