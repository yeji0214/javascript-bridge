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
    Console.print(this.#bridgeDirections);
  }

  move() { }

  retry() { }
}