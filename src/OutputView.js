import { Console } from '@woowacourse/mission-utils';

export const OutputView = {
  printGameStart() {
    Console.print('다리 건너기 게임을 시작합니다.\n\n');
  },

  printMap(round, bridgeDirections, playerDirection, isMatch) {
    let upResult = [];
    let downResult = [];

    if (round > 0) {
      for (let i = 0; i < round; i++) {
        if (bridgeDirections[i] === 'U') upResult.push('O');
        else upResult.push(' ');
      }
      for (let i = 0; i < round; i++) {
        if (bridgeDirections[i] === 'D') downResult.push('O');
        else downResult.push(' ');
      }
    }

    if (playerDirection === 'U') {
      this.printFinalRoundUp(isMatch, upResult, downResult)
    }
    else if (playerDirection === 'D') {
      this.printFinalRoundDown(isMatch, upResult, downResult)
    }

    Console.print(`[ ${upResult.join( ' | ')} ]\n`);
    Console.print(`[ ${downResult.join( ' | ')} ]\n`);
  },

  printFinalRoundUp(isMatch, upResult, downResult) {
    if (isMatch) {
      upResult.push('O');
      downResult.push(' ');
    }
    else {
      upResult.push('X');
      downResult.push(' ');
    }
  },

  printFinalRoundDown(isMatch, upResult, downResult) {
    if (isMatch) {
      upResult.push(' ');
      downResult.push('O');
    }
    else {
      upResult.push(' ');
      downResult.push('X');
    }
  },

  printResult() { },
};