class Rule {
    constructor(name, api, checkfunc, actfunc) {
        this.name = name;
        this.api = api;

        this.check = checkfunc;
        this.act = actfunc;
    }
}

module.exports = Rule;
