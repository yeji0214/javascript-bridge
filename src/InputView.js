const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { INPUT_MESSAGE, COMMAND, RESULT } = require("./constant/input");
const {
  validateBridgeSize,
  validateInputBridgeMoving,
  validateInputRestart,
} = require("./errorHandling");
const { determineGameRestart } = require("./utils/validate");
const OutputView = require("./OutputView");
const { restartCommand, moveDirection } = require("./utils/subInput");

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
      if (validateBridgeSize(bridgeSize)) return this.readBridgeSize();
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
      if (validateInputBridgeMoving(userInput)) {
        return this.readMoving(bridge, movingLists, countOfGameAttempts);
      }
      const [result, checkSuccess] = moveDirection(
        userInput,
        bridge,
        movingLists
      );
      if (determineGameRestart(result))
        return this.readGameCommand(bridge, movingLists, countOfGameAttempts);
      if (checkSuccess === bridge.length)
        return OutputView.printResult(
          RESULT.success,
          movingLists,
          countOfGameAttempts
        );
      return this.readMoving(bridge, result, countOfGameAttempts);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge, movingLists, countOfGameAttempts) {
    Console.readLine(INPUT_MESSAGE.restart, (isRestart) => {
      if (validateInputRestart(isRestart)) {
        this.readGameCommand(bridge, movingLists, countOfGameAttempts);
      }
      if (isRestart === COMMAND.restart) {
        const [reset, count] = restartCommand(movingLists, countOfGameAttempts);
        return this.readMoving(bridge, reset, count);
      }
      if (isRestart === COMMAND.end) {
        OutputView.printResult(RESULT.fail, movingLists, countOfGameAttempts);
      }
    });
  },
};

module.exports = InputView;
