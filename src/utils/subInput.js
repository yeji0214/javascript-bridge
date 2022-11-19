const BridgeGame = require('../BridgeGame');
const OutputView = require('../OutputView');

function restartCommand(movingLists, countOfGameAttempts) {
  countOfGameAttempts += 1;
  const bridgeGame = new BridgeGame();
  const resetMoveLists = bridgeGame.retry(movingLists);
  return [resetMoveLists, countOfGameAttempts];
}

function moveDirection(userInput, bridge, movingLists) {
  const bridgeGame = new BridgeGame();
  const moveResult = bridgeGame.move(userInput, bridge, movingLists);
  OutputView.printMap(moveResult);

  return [moveResult, moveResult[0].length];
}

module.exports = {
  restartCommand,
  moveDirection,
};
