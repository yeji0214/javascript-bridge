import { BridgeMaker } from "./BridgeMaker.js";
import BridgeRandomNumberGenerator from "./BridgeRandomNumberGenerator.js";
import { InputView } from "./InputView.js";
import { OutputView } from "./OutputView.js";

export class BridgeGame {
  #bridgeLength;
  #bridgeDirections = [];
  #upResult = [];
  #downResult = [];
  #tryCount = 0;
  #playerDirection = '';

  async start() {
    OutputView.printGameStart();
    this.#bridgeLength = await InputView.readBridgeSize();
    this.#bridgeDirections = BridgeMaker.makeBridge(this.#bridgeLength, BridgeRandomNumberGenerator);
    this.move();
    
  }

  async move() {
    let retry = '', i = 0;
    this.#tryCount += 1;

    for (i = 0; i < this.#bridgeLength; i++) {
      this.#upResult = [], this.#downResult = [];
      this.#playerDirection = await InputView.readMoving();
      if (this.#playerDirection === this.#bridgeDirections[i]) OutputView.printMap(i, true, this);
      else {
        OutputView.printMap(i, false, this);
        retry = await InputView.readGameCommand();
        break;
      }
    }
    
    if (retry === 'R') this.retry();
    else {
      if (i === this.#bridgeLength) OutputView.printResult(this, true);
      else OutputView.printResult(this, false);
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

  getBridgeDirections () {
    return this.#bridgeDirections;
  }

  getPlayerDirection() {
    return this.#playerDirection;
  }

  getTryCount() {
    return this.#tryCount;
  }

  setUpResult(result) {
    this.#upResult.push(result);
  }

  setDownResult(result) {
    this.#downResult.push(result);
  }
}