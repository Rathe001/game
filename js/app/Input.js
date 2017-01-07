class Input {
    constructor() {
        this.el = document.getElementById('input');

        this.addEventListeners();
    }

    addEventListeners() {
        let self = this,
            sanitizedCommand,
            event;

        this.el.addEventListener('keyup', this.sendCommand);
    }

    sendCommand(e) {
        if(e) {
            e.preventDefault();
        }

        if (e.keyCode === 13) {
            document.dispatchEvent(new CustomEvent('command', {
                bubbles: true,
                cancelable: true,
                detail: e.target.value
            }));

            e.target.value = '';
        }
    }
}