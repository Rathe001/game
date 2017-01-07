class State {
    constructor() {
        this.NEW_GAME = EVENTS.NEW_GAME;
        this.expectedInput = [];
    }

    set(state) {
        switch(state) {
            case 'new':
                this.expectedInput = this.NEW_GAME;
                break;
            case 'other':

                break;
        }
    }

    get() {
        return this.expectedInput[0];
    }

    complete() {
        this.expectedInput.shift();
    }

    expectsInput() {
        return this.expectedInput.length > 0;
    }
}