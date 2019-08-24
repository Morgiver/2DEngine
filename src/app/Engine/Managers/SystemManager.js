import AbstractManager from "./AbstractManager";

class SystemManager extends AbstractManager {
    constructor(Engine) {
        super(Engine);

        this.systems = {};
    }

    getSystem(name) {
        if(!this.systems[name]) throw new Error('Unknown ' + name + ' system');
        else return this.systems[name];
    }

    add(name, System, args = []) {
        let newSystem      = new System(this, ...args);
        this.systems[name] = newSystem;
        return this;
    }
}

export default SystemManager;