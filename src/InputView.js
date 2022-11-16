const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("./constant/input");
const {
  validateBridgeSize,
  validateInputBridgeMoving,
} = require("./errorHandling");

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
    Console.readLine(INPUT_MESSAGE.bridge, (userInput) => {
      validateBridgeSize(userInput);
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(INPUT_MESSAGE.moving, (userInput) => {
      validateInputBridgeMoving(userInput);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
