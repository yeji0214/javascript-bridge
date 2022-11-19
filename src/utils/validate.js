const { RANGE, BRIDGE } = require("../constant/input");

const checkInputBridgeRange = (userInput) =>
  +userInput >= RANGE.min && +userInput <= RANGE.max;

const checkNotNumbersInInput = (userInput) =>
  [...userInput].every((v) => +v || v === "0");

const isInputUpOrDown = (userInput) => userInput === "U" || userInput === "D";

const isInputReOrQuit = (userInput) => userInput === "R" || userInput === "Q";

const determineGameRestart = (moveLists) => {
  const [upList, downList] = moveLists;
  return (
    upList.includes(BRIDGE.wrong_direction) ||
    downList.includes(BRIDGE.wrong_direction)
  );
};

module.exports = {
  checkInputBridgeRange,
  checkNotNumbersInInput,
  isInputUpOrDown,
  isInputReOrQuit,
  determineGameRestart,
};
