import { BridgeMaker } from "./BridgeMaker.js";
import BridgeRandomNumberGenerator from "./BridgeRandomNumberGenerator.js";
import { InputView } from "./InputView.js";
import { OutputView } from "./OutputView.js";
import { Console } from '@woowacourse/mission-utils';

export class BridgeGame {
  #bridgeLength;
  #bridgeDirections = [];
  #upResult = [];
  #downResult = [];

  async start() {
    OutputView.printGameStart();
    this.#bridgeLength = await InputView.readBridgeSize();
    this.#bridgeDirections = BridgeMaker.makeBridge(this.#bridgeLength, BridgeRandomNumberGenerator);
    this.move();
    
  }

  async move() {
    let playerDirection = '', retry = '', i = 0;

    for (i = 0; i < this.#bridgeLength; i++) {
      this.#upResult = [], this.#downResult = [];
      playerDirection = await InputView.readMoving();
      if (playerDirection === this.#bridgeDirections[i]) OutputView.printMap(i, this.#bridgeDirections, playerDirection, true, this);
      else {
        OutputView.printMap(i, this.#bridgeDirections, playerDirection, false, this);
        retry = await InputView.readGameCommand();
        break;
      }
    }
    
    if (retry === 'R') this.retry();
    else {
      if (i === this.#bridgeLength) OutputView.printResult(this.#upResult, this.#downResult, true);
      else OutputView.printResult(this.#upResult, this.#downResult, false);
    } 
  }

  async retry() { 
    await this.move();
  }

  getUpResult() {
    return this.#upResult;
  }

  getDownResult() {
    return this.#downResult;
  }

  setUpResult(result) {
    this.#upResult.push(result);
  }

  setDownResult(result) {
    this.#downResult.push(result);
  }
}