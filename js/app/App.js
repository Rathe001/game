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
        this.viewport.clear();
        this.viewport.typeAppend(this.state.get().message);
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
                    return this.viewport.append(`Hello to you, too!`);
                default:
                    return this.viewport.append(`Huh? Type 'help' for a list of basic commands.`);
            }
        }
    }

    nextStep() {
        this.viewport.clear();
        this.viewport.typeAppend(this.state.get().message).then((rs) => {
            console.log(rs);
            this.viewport.append('MY TESTSETSETSET');
        });
    }

    finalizeNewCharacter() {
        let message = `<pre>
          .                                                      .
        .n                   .                 .                  n.
  .   .dP                  dP                   9b                 9b.    .
 4    qXb         .       dX                     Xb       .        dXp     t
dX.    9Xb      .dXb    __                         __    dXb.     dXP     .Xb
9XXb._       _.dXXXXb dXXXXbo.                 .odXXXXb dXXXXb._       _.dXXP
 9XXXXXXXXXXXXXXXXXXXVXXXXXXXXOo.           .oOXXXXXXXXVXXXXXXXXXXXXXXXXXXXP
  '9XXXXXXXXXXXXXXXXXXXXX'~   ~'OOO8b   d8OOO'~   ~'XXXXXXXXXXXXXXXXXXXXXP'
    '9XXXXXXXXXXXP' '9XX'          '98v8P'          'XXP' '9XXXXXXXXXXXP'
        ~~~~~~~       9X.          .db|db.          .XP       ~~~~~~~
                        )b.  .dbo.dP''v''9b.odb.  .dX(
                      ,dXXXXXXXXXXXb     dXXXXXXXXXXXb.
                     dXXXXXXXXXXXP'   .   '9XXXXXXXXXXXb
                    dXXXXXXXXXXXXb   d|b   dXXXXXXXXXXXXb
                    9XXb'   'XXXXXb.dX|Xb.dXXXXX'   'dXXP
                     ''      9XXXXXX(   )XXXXXXP      ''
                              XXXX X.'v'.X XXXX
                              XP^X''b   d''X^XX
                              X. 9  '   '  P )X
                              'b  '       '  d'
                               '             '
Welcome to the game!
        </pre>`;

        message += '<br><br>Hello, ' + this.user.getName() + '! You are a ' + this.user.race.getName() + ' ' + this.user.class.getName();
        this.viewport.reset(message);

        this.startMainLoop();
    }

    startMainLoop() {

    }
}