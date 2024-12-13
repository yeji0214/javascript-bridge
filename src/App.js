import { BridgeGame } from "./BridgeGame.js";

class App {
  play() {
    const bridgeGame = new BridgeGame();
    bridgeGame.start();
  }
}

const app = new App();

app.play();