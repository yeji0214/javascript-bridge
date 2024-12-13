import { InputView } from "./InputView.js";
import { OutputView } from "./OutputView.js";

export class BridgeGame {
    start() {
      OutputView.printGameStart();
      InputView.readBridgeSize();
    }
    move() {}
  
    retry() {}
  }