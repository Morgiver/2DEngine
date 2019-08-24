import AbstractSystem from "./AbstractSystem";


class EntityComponentSystem extends AbstractSystem {
    constructor(Manager) {
        super(Manager);
    }

    updateEntityComponent(Entity, SystemName) {
        this.require('System.' + SystemName).update(Entity);
    }
}

export default EntityComponentSystem;