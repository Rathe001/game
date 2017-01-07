class Viewport {
    constructor() {
        this.el = document.getElementById('viewport');
    }

    clear() {
        this.el.innerHTML = '';
    }

    append(input) {
        this.el.innerHTML = this.el.innerHTML + '<br>' + input;
    }

    prepend(input) {
        this.el.innerHTML = input + '<br>' + this.el.innerHTML;
    }

    reset(input) {
        this.clear();
        this.append(input);
    }
}