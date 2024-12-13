import { MESSAGES } from "./constants.js";

class BridgeLength {
    #length;

    constructor(length) {
        this.#length = this.#validate(Number(length));
    }

    #validate(length) {
        if (isNaN(length) || !Number.isInteger(length)) throw new Error(MESSAGES.ERROR.BRIDGE_LENGTH_NOT_INTEGER);
        if (length < 3 || length > 20) throw new Error(MESSAGES.ERROR.BRIDGE_LENGTH_OUT_OF_RANGE);

        return length;
    }

    getLength() {
        return this.#length;
    }
}

export default BridgeLength;