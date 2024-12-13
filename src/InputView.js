import { Console } from '@woowacourse/mission-utils';
// const { Console } = pkg;
import { MESSAGES } from './constants.js';
import BridgeLength from './BridgeLength.js';

export const InputView = {
  async readBridgeSize() {
    while (true) {
      const bridgeLength = await Console.readLineAsync(MESSAGES.INFO.BRIDGE_LENGTH_PROMPT);

      try {
        return new BridgeLength(bridgeLength).getLength();
      } catch (error) {
        Console.print(error.message);
      }
    }
  },

  readMoving() { },

  readGameCommand() { },
};