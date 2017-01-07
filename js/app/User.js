class User {
    constructor(params) {
        this.name = params ? params.name || 'Joe' : 'Joe';
        this.class = '';
        this.race = '';
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    setClass(c) {
        c = c.toLowerCase();

        switch(c) {
            case 'r':
            case 'rogue':
                this.class = new Classes.Rogue();
                break;
            case 'm':
            case 'mage':
                this.class = new Classes.Mage();
                break;
        }
    }

    setRace(r) {
        r = r.toLowerCase();

        switch(r) {
            case 'd':
            case 'demon':
                this.race = new Races.Demon();
                break;
            case 'h':
            case 'human':
                this.race = new Races.Human();
                break;
        }
    }
}