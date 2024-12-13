import { BridgeMaker } from "./BridgeMaker.js";
import BridgeRandomNumberGenerator from "./BridgeRandomNumberGenerator.js";
import { InputView } from "./InputView.js";
import { OutputView } from "./OutputView.js";
import { Console } from '@woowacourse/mission-utils';

export class BridgeGame {
  #bridgeLength;
  #bridgeDirections = [];

  async start() {
    OutputView.printGameStart();
    this.#bridgeLength = await InputView.readBridgeSize();
    this.#bridgeDirections = BridgeMaker.makeBridge(this.#bridgeLength, BridgeRandomNumberGenerator);
    this.move();
    
  }

  async move() {
    let playerDirection = '';

    for (let i = 0; i < this.#bridgeLength; i++) {
      playerDirection = await InputView.readMoving();
      if (playerDirection === this.#bridgeDirections[i]) OutputView.printMap(i, this.#bridgeDirections, playerDirection, true);
      else OutputView.printMap(i, this.#bridgeDirections, playerDirection, false);
    }
  }

  retry() { }
}