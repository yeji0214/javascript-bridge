export const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridgeDirections = [];
    let num = 0;
    for (let i = 0; i < size; i++) {
      num = generateRandomNumber.generate();
      if (num === 0) bridgeDirections.push('D');
      else bridgeDirections.push('U');
    }
    return bridgeDirections;
  },
};