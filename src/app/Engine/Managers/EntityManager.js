import AbstractManager from "./AbstractManager";

/**
 * EntityManager
 * @description Permet de créer et mettre à jours des Entités
 */
class EntityManager extends AbstractManager {
    constructor(Engine) {
        super(Engine);

        this.entities = [];
    }

    /**
     * create
     * @description Créé une entité selon son namespace et l'inclus dans le tableau d'entités.
     * @param namespace
     * @param args
     * @returns Entity
     */
    create(namespace, args = []) {
        let eClass = this.require(namespace);
        let eIns   = new eClass(this, ...args);
        let Tools  = this.require('Tools');
        let id     = Tools.makeId(16);

        while(this.entities[id] !== undefined) id = Tools.makeId(16);

        eIns._id          = id;
        this.entities[id] = eIns;
        return this.entities[id];
    }

    /**
     * update
     * @description Parcours le tableau d'entité et les mets à jour une à une.
     */
    update() {
        for(let i in this.entities) {
            this.entities[i].update();
        }
    }
}

export default EntityManager;