const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { INPUT_MESSAGE } = require("./constant/input");
const {
  validateBridgeSize,
  validateInputBridgeMoving,
} = require("./errorHandling");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readGameStart() {
    Console.print(INPUT_MESSAGE.game_start);
  },

  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.bridge, (bridgeSize) => {
      validateBridgeSize(bridgeSize);
      const bridge = BridgeMaker.makeBridge(
        bridgeSize,
        BridgeRandomNumberGenerator.generate
      );
      this.readMoving(bridge);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge) {
    Console.readLine(INPUT_MESSAGE.moving, (userInput) => {
      validateInputBridgeMoving(userInput);
      OutputView.printMap(bridge, userInput);
      Console.close();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
