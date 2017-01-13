class Viewport {
    constructor() {
        this.el = document.getElementById('viewport');
    }

    clear() {
        return new Promise((resolve, reject) => resolve(this.el.innerHTML = ''));
    }

    append(input) {
        return this.el.innerHTML = this.el.innerHTML + '<br>' + input;
    }

    prepend(input) {
        return this.el.innerHTML = input + '<br>' + this.el.innerHTML;
    }

    typeAppend(input) {
        return new Promise((resolve, reject) => {

            for(let i=0; i<input.length; i++) {
                window.setTimeout(() => {
                    this.el.innerHTML += input[i];

                    if(i === input.length-1) {
                        resolve(true);
                    }
                }, i*50);
            }
        });
    }

    reset(input) {
        return this.el.innerHTML = '';
        this.append(input);
    }
}