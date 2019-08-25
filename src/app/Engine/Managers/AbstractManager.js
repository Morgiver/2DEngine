/**
 * Abstract Manager
 */
class AbstractManager {
    constructor(Engine) {
        this.Engine = Engine;
    }

    require(namespace) {
        return this.Engine.require(namespace);
    }
}

export default AbstractManager;