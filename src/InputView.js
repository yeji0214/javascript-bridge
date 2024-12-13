import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';
import BridgeLength from './BridgeLength.js';
import MoveDirection from './MoveDirection.js';

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

  async readMoving() { 
    while (true) {
      const move = await Console.readLineAsync(MESSAGES.INFO.MOVE_PROMPT);

      try {
        return new MoveDirection(move).getDirection();
      } catch (error) {
        Console.print(error.message);
      }
    }
  },

  readGameCommand() { },
};