import { Console } from '@woowacourse/mission-utils';
import { BridgeGame } from './BridgeGame.js';
import { MESSAGES } from './constants.js';

export const OutputView = {
  printGameStart() {
    Console.print(MESSAGES.INFO.START_GAME_TITLE);
  },

  printMap(round, bridgeDirections, playerDirection, isMatch, bridgeGame) {
    if (round > 0) {
      for (let i = 0; i < round; i++) {
        if (bridgeDirections[i] === 'U') bridgeGame.setUpResult('O');
        else bridgeGame.setUpResult(' ');
      }
      for (let i = 0; i < round; i++) {
        if (bridgeDirections[i] === 'D') bridgeGame.setDownResult('O');
        else bridgeGame.setDownResult(' ');
      }
    }

    if (playerDirection === 'U') {
      this.printFinalRoundUp(isMatch, bridgeGame)
    }
    else if (playerDirection === 'D') {
      this.printFinalRoundDown(isMatch, bridgeGame)
    }

    Console.print(`[ ${bridgeGame.getUpResult().join( ' | ')} ]\n`);
    Console.print(`[ ${bridgeGame.getDownResult().join( ' | ')} ]\n`);
  },

  printFinalRoundUp(isMatch, bridgeGame) {
    if (isMatch) {
      bridgeGame.setUpResult('O');
      bridgeGame.setDownResult(' ');
    }
    else {
      bridgeGame.setUpResult('X');
      bridgeGame.setDownResult(' ');
    }
  },

  printFinalRoundDown(isMatch, bridgeGame) {
    if (isMatch) {
      bridgeGame.setUpResult(' ');
      bridgeGame.setDownResult('O');
    }
    else {
      bridgeGame.setUpResult(' ');
      bridgeGame.setDownResult('X');
    }
  },

  printResult(upResult, downResult, isSuccess) {
    Console.print(MESSAGES.INFO.GAME_RESULT_TITLE);
    Console.print(`[ ${upResult.join( ' | ')} ]\n`);
    Console.print(`[ ${downResult.join( ' | ')} ]\n`);

    if (isSuccess) Console.print(MESSAGES.INFO.GAME_SUCCESS);
    else Console.print(MESSAGES.INFO.GAME_FAIL);
  },
};