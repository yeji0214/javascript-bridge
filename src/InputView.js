const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { INPUT_MESSAGE } = require("./constant/input");
const {
  validateBridgeSize,
  validateInputBridgeMoving,
} = require("./errorHandling");
const { determineGameRestart } = require("./utils/validate");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readGameStart() {
    Console.print(INPUT_MESSAGE.game_start);
  },

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.bridge, (bridgeSize) => {
      validateBridgeSize(bridgeSize);
      const bridge = BridgeMaker.makeBridge(
        bridgeSize,
        BridgeRandomNumberGenerator.generate
      );
      const countOfGameAttempts = 1;
      const movingLists = [[], []];
      this.readMoving(bridge, movingLists, countOfGameAttempts);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, movingLists, countOfGameAttempts) {
    Console.readLine(INPUT_MESSAGE.moving, (userInput) => {
      validateInputBridgeMoving(userInput);
      const bridgeGame = new BridgeGame();
      const moveDirection = bridgeGame.move(userInput, bridge, movingLists);
      OutputView.printMap(moveDirection);
      determineGameRestart(moveDirection) &&
        this.readGameCommand(bridge, movingLists, countOfGameAttempts);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge, movingLists, countOfGameAttempts) {
    Console.readLine(INPUT_MESSAGE.restart, (isRestart) => {});
  },
};

module.exports = InputView;
