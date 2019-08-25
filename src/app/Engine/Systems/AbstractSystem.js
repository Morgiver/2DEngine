/**
 * AbstractSystem
 * @description Classe abstraite des System, fourni des méthodes basiques
 */
class AbstractSystem {
    constructor(Engine) {
        this.Engine = Engine;
    }

    require(namespace) {
        return this.Engine.require(namespace);
    }

    define(namespace, value) {
        this.Engine.define(namespace, value);
    }

    update() {
        return;
    }
}

export default AbstractSystem;