import SystemManager    from "./Managers/SystemManager";
import EntityManager    from "./Managers/EntityManager";
import ComponentManager from "./Managers/ComponentManager";
import SceneManager     from "./Managers/SceneManager";

class Engine {
    constructor() {
        this.System    = new SystemManager(this);
        this.Entity    = new EntityManager(this);
        this.Component = new ComponentManager(this);
        this.Scenes    = new SceneManager(this);
    }

    require(namespace) {
        let parts = namespace.split('.');
        let root  = parts[0];

        switch(root) {
            case "System":
                return this.System.getSystem(parts[1]);
                break;
            case "Entity":
                return this.Entity.getEntityClass(parts[1]);
                break;
            case "Component":
                return this.Component.getComponentClass(parts[1]);
                break;
            default:
                return null;
                break;
        }
    }

    addSystem(name, SystemClass, args) {
        this.System.add(name, SystemClass, args);
        return this;
    }

    addClassComponent(name, ComponentClass) {
        this.Component.add(name, ComponentClass);
        return this;
    }

    addClassEntity(name, EntityClass) {
        this.Entity.add(name, EntityClass);
        return this;
    }
}

export default Engine;