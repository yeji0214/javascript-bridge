export const MESSAGES = {
    INFO: {
        START_GAME_TITLE: '다리 건너기 게임을 시작합니다.\n\n',
        BRIDGE_LENGTH_PROMPT: '다리의 길이를 입력해주세요.\n',
        MOVE_PROMPT: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
        RETRY_PROMPT: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
        GAME_RESULT_TITLE: '최종 게임 결과\n',
        GAME_SUCCESS: '\n게임 성공 여부: 성공\n',
        GAME_FAIL: '\n게임 성공 여부: 실패\n',
        TOTAL_TRY_COUNT_TITLE: '총 시도한 횟수: ',
    },
    ERROR: {
        BRIDGE_LENGTH_NOT_INTEGER: '[ERROR] 다리 길이로는 정수를 입력해야 합니다.\n',
        BRIDGE_LENGTH_OUT_OF_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
        INVALID_MOVE_DIRECTION: '[ERROR] U 또는 D를 입력해 이동해주세요.\n',
        INVALID_RETRY: '[ERROR] R 또는 Q를 재시도 여부를 결정해주세요.\n',
    }
};