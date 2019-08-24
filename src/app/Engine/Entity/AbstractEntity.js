
const ENTITY_STATE_ALIVE = 'ENTITY_STATE_ALIVE';
const ENTITY_STATE_DEAD  = 'ENTITY_STATE_DEAD';

class AbstractEntity {
    constructor(Manager) {
        this.manager    = Manager;
        this._id        = null;
        this.state      = ENTITY_STATE_ALIVE;
        this.components = [];
    }

    require(namespace) {
        return this.manager.require(namespace);
    }

    addComponent(name, args = []) {
        let component = this.require('Component.' + name);

        if(!this.components[name] && component) {
            this.components[name] = new component(...args);
        }
    }

    update() {
        for(let i in this.components) {
            if(this.components[i].SystemName) {
                this.require('System.EntityComponentSystem').updateEntityComponent(this, this.components[i].SystemName);
            }
        }
    }

    kill() {
        this.state = ENTITY_STATE_DEAD;
    }

    onMouseClick() {
        return;
    }

    onMouseHover() {
        return;
    }

    onMouseOut() {
        return;
    }
}

export default AbstractEntity;