export class Debouncer {

    DEFAULT_IDENTIFIER = 'DEFAULT';
    DEFAULT_DELAY = 250;
    TIMEOUT_IDS = {[this.DEFAULT_IDENTIFIER]: 0};


    constructor(DEFAULT_DELAY = this.DEFAULT_DELAY) {
        this.DEFAULT_DELAY = DEFAULT_DELAY;
    }

    debounce = (fn, delay = this.DEFAULT_DELAY, identifier = this.DEFAULT_IDENTIFIER,) => {
        if (this.TIMEOUT_IDS.hasOwnProperty(identifier)) {
            clearTimeout(this.TIMEOUT_IDS[identifier]);
        }
        if (delay) {
            this.TIMEOUT_IDS[identifier] = setTimeout(fn, delay);
        } else {
            fn();
        }

        return this;
    }

    clear = (id = this.TIMEOUT_IDS[this.DEFAULT_IDENTIFIER]) => {
        clearTimeout(id);
        return this;
    }

    clearAll = () => {
        Object.values(this.TIMEOUT_IDS).forEach(clearTimeout);
        return this;
    }

    getAll = () => ({...this.TIMEOUT_IDS});

    setDefaultDelay = delay => {
        this.DEFAULT_DELAY = delay;
        return this;
    }
}

export const debouncer = new Debouncer();

export const debounce = debouncer.debounce;

export default debounce;
