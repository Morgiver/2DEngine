import AbstractEngine       from "./AbstractEngine";
import Tools                from "./Tools";
// Managers
import SceneManager         from "./Managers/SceneManager";
import EntityManager        from "./Managers/EntityManager";
import EventsManager        from "./Managers/EventsManager";
// Systems
import ResourceSystem       from "./Systems/ResourceSystem";
import DrawSystem           from "./Systems/DrawSystem";
import RenderSystem         from "./Systems/RenderSystem";
import EventsSystem         from "./Systems/EventsSystem";
import LoopAnimationSystem  from "./Systems/LoopAnimationSystem";
// Components
import PositionComponent    from "./Components/PositionComponent";
import RenderComponent      from "./Components/RenderComponent";
// Entity
import Entity               from "./Entity/Entity";
import EventsComponent      from "./Components/EventsComponent";


/**
 * Engine
 */
class Engine extends AbstractEngine {
    constructor(appname, screenWidth, screenHeight, context) {
        super();

        /**
         * Définition des variable Globales
         */
        this.define('Globals.AppName',      appname);
        this.define('Globals.screenWidth',  screenWidth);
        this.define('Globals.screenHeight', screenHeight);
        this.define('Globals.Context',      context);

        /**
         * Définition des Managers
         */
        this.define(   'Tools',  new Tools(this));
        this.defineManager('Scene',  new SceneManager(this));
        this.defineManager('Entity', new EntityManager(this));
        this.defineManager('Events', new EventsManager(this));

        /**
         * Définition des Systems
         */
        this.defineSystem('Resource',      ResourceSystem);
        this.defineSystem('Draw',          DrawSystem);
        this.defineSystem('Render',        RenderSystem);
        this.defineSystem('Events',        EventsSystem);
        this.defineSystem('LoopAnimation', LoopAnimationSystem);

        /**
         * Définition des Class Components
         */
        this.defineComponent('Position',    PositionComponent);
        this.defineComponent('Render',      RenderComponent);
        this.defineComponent('Events',      EventsComponent);

        /**
         * Définition des Entity
         */
        this.defineEntity('Entity', Entity);
    }

    /**
     * defineManager
     * @description Défini des instances de Manager dans l'espace de nom Managers.xxx
     * @param name
     * @param manager
     */
    defineManager(name, manager) {
        this.define('Managers.' + name, manager);
    }

    /**
     * defineSystem
     * @description Défini des instances de System dans l'espace de nom Systems.xxx
     * @param name
     * @param System
     * @param args
     */
    defineSystem(name, System, args = []) {
        this.define('Systems.' + name, new System(this, ...args));
    }

    /**
     * defineEntity
     * @description Défini des classe d'Entity dans l'espace de nom Class.Entity.xxx
     * @param namespace
     * @param Entity
     */
    defineEntity(namespace, Entity) {
        this.define('Class.Entity.' + namespace, Entity)
    }

    /**
     * defineComponent
     * @description Défini des classes de Component dans l'espace de nom Class.Component.xxx
     * @param namespace
     * @param Component
     */
    defineComponent(namespace, Component) {
        this.define('Class.Component.' + namespace, Component);
    }
}

export default Engine;