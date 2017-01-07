class App {
    constructor() {
        this.user = new User();
        this.input = new Input();
        this.viewport = new Viewport();
        this.state = new State();

        this.addEventListeners();

        this.init();
    }

    init() {
        this.state.set('new');
        this.viewport.reset(this.state.get().message);
    }

    addEventListeners() {
        let self = this;

        document.addEventListener('command', function (e) {
            self.processCommand(e.detail);
        });
    }

    processCommand(command) {
        if(this.state.expectsInput()) {
            switch(this.state.get().id) {
                case 'new-game-0':
                    this.user.setName(command);
                    this.state.complete();
                    this.nextStep();
                    break;
                case 'new-game-1':
                    this.user.setRace(command);
                    this.state.complete();
                    this.nextStep();
                    break;
                case 'new-game-2':
                    this.user.setClass(command);
                    this.state.complete();
                    this.finalizeNewCharacter();
                    break;
            }
        } else {
            switch(command) {
                case 'hello':
                    return this.viewport.append('Hello to you, too!')
            }
        }
    }

    nextStep() {
        this.viewport.reset(this.state.get().message);
    }

    finalizeNewCharacter() {
        let message = 'Hello, ' + this.user.getName() + '! You are a ' + this.user.race.getName() + ' ' + this.user.class.getName();
        this.viewport.reset(message);
    }
}