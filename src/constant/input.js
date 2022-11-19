const INPUT_MESSAGE = {
  game_start: `다리 건너기 게임을 시작합니다.\n`,
  bridge: `다리의 길이를 입력해주세요.\n`,
  moving: `\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n`,
};

const RANGE = {
  min: 3,
  max: 20,
};

const MOVING = {
  random_up: 1,
  random_down: 0,
  up: "U",
  down: "D",
};

const BRIDGE = {
  right_direction: "O",
  wrong_direction: "X",
  blank: " ",
};

module.exports = {
  INPUT_MESSAGE,
  RANGE,
  MOVING,
  BRIDGE,
};
