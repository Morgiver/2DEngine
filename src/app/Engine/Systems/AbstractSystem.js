
class AbstractSystem {
    constructor(Manager) {
        this.manager = Manager;
    }

    require(namespace) {
        return this.manager.require(namespace);
    }

    update() {
        return;
    }
}

export default AbstractSystem;