class GameCommand {
    #retry;

    constructor(retry) {
        this.#retry = this.#validate(retry);
    }

    #validate(retry) {
        if (retry !== 'R' && retry !== 'Q') throw new Error(MESSAGES.ERROR.INVALID_RETRY);
        return retry;
    }

    getRetry() {
        return this.#retry;
    }
}

export default GameCommand;