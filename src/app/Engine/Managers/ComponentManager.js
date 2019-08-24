import AbstractManager from "./AbstractManager";

class ComponentManager extends AbstractManager {
    constructor(Engine) {
        super(Engine);
        this.components = {};
    }

    getComponentClass(name) {
        if(!this.components[name]) throw new Error('Unknown ' + name + ' Component Class');
        else return this.components[name];
    }

    add(name, Component) {
        this.components[name] = Component;
        return this;
    }
}

export default ComponentManager;