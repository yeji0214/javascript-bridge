const { MOVING, BRIDGE } = require("./constant/input");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction, bridge, movingLists) {
    const index = movingLists[0].length;
    direction === MOVING.up &&
      this.upMove(direction, bridge[index], movingLists);
    direction === MOVING.down &&
      this.downMove(direction, bridge[index], movingLists);
    return movingLists;
  }

  upMove(direction, bridge, movingLists) {
    if (direction === bridge) {
      movingLists[0].push(BRIDGE.right_direction);
      movingLists[1].push(BRIDGE.blank);
      return;
    }
    movingLists[0].push(BRIDGE.wrong_direction);
    movingLists[1].push(BRIDGE.blank);
  }

  downMove(direction, bridge, movingLists) {
    if (direction === bridge) {
      movingLists[1].push(BRIDGE.right_direction);
      movingLists[0].push(BRIDGE.blank);
      return;
    }
    movingLists[1].push(BRIDGE.wrong_direction);
    movingLists[0].push(BRIDGE.blank);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(moveLists) {
    moveLists = [[], []];
    return moveLists;
  }
}

module.exports = BridgeGame;
