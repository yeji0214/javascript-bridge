import { MESSAGES } from "./constants.js";

class MoveDirection {
    #move;

    constructor(move) {
        this.#move = this.#validate(move);
    }

    #validate(move) {
        if (move !== 'U' && move !== 'D') throw new Error(MESSAGES.ERROR.INVALID_MOVE_DIRECTION);
        return move;
    }

    getDirection() {
        return this.#move;
    }
}

export default MoveDirection;