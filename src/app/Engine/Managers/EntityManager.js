import AbstractManager from "./AbstractManager";

class EntityManager extends AbstractManager {
    constructor(Engine) {
        super(Engine);

        this.entitiesInstance = [];
        this.entitiesClass    = {};
    }

    getEntityClass(name) {
        if(!this.entitiesClass[name]) throw new Error('Unknown ' + name + ' Entity Class');
        else return this.entitiesClass[name];
    }

    add(name, Entity) {
        this.entitiesClass[name] = Entity;
        return this;
    }

    create(name, args = []) {
        let eClass = this.getEntityClass(name);
        let eIns   = new eClass(this, ...args);

        let id = this.require('System.Tools').makeId(16);
        while(this.entitiesInstance[id] !== undefined) id = this.require('System.Tools').makeId(16);

        eIns._id = id;
        this.entitiesInstance[id] = eIns;
        return this.entitiesInstance[id];
    }

    update() {
        for(let i in this.entitiesInstance) {
            this.entitiesInstance[i].update();
        }
    }
}

export default EntityManager;