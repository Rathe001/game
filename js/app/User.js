class User {
    constructor(params) {
        this.name = params ? params.name || 'Joe' : 'Joe';
        this.class = '';
        this.race = '';

        this.maxHp = '?';
        this.currentHp = '?';

        this.maxMana = '?';
        this.currentMana = '?';
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
                this.setClassRogue();
                break;
            case 'm':
            case 'mage':
                this.setClassMage();
                break;
        }
    }

    setClassRogue() {
        this.class = new Classes.Rogue();
        this.resetHp(100);
        this.resetMana(80);
    }

    setClassMage() {
        this.class = new Classes.Mage();
        this.resetHp(80);
        this.resetMana(100);
    }

    setRace(r) {
        r = r.toLowerCase();

        switch(r) {
            case 'd':
            case 'demon':
                return this.setRaceDemon();
            case 'h':
            case 'human':
                return this.setRaceHuman();
        }
    }

    setRaceDemon() {
        this.race = new Races.Demon();
    }

    setRaceHuman() {
        this.race = new Races.Human();
    }

    resetHp(val) {
        this.maxHp = val;
        this.currentHp = val;
    }

    setCurrenttHp(val) {
        this.currentHp = val;
    }

    setMaxtHp(val) {
        this.currentHp = val;
    }

    resetMana(val) {
        this.maxMana = val;
        this.currentMana = val;
    }

    setCurrentMana(val) {
        this.currentMana = val;
    }

    setMaxMana(val) {
        this.maxMana = val;
    }
}