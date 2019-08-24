import AbstractManager from "./AbstractManager";

const DRAWABLE_SCENE = 'DRAWABLE_SCENE';
const HIDDEN_SCENE   = 'HIDDEN_SCENE';

const GAME_LAYER = 'GAME_LAYER';
const HUD_LAYER  = 'HUD_LAYER';
const MENU_LAYER = 'MENU_LAYER';

class Scene {
    constructor(Manager) {
        this.manager  = Manager;
        this.eManager = this.manager.Engine.Entity;
        this.resource = this.require('System.ResourceSystem');
        this.entities = [];
        this.state    = HIDDEN_SCENE;
        this.type     = null;
    }

    addEntity(config) {
        this.entities[config.name] = this.eManager.create(config.entityClass, config.args);

        for(let i in config.components) {
            this.entities[config.name].addComponent(i, config.components[i]);
        }
    }

    require(namespace) {
        return this.manager.require(namespace);
    }

    buildScene(layerType, SceneData, state) {
        this.type = layerType;

        for(let i in SceneData.entities) {
            this.addEntity(SceneData.entities[i]);
        }

        this.state = state;
    }

    update() {
        if(this.state === DRAWABLE_SCENE) {
            for(let i in this.entities) {
                this.entities[i].update();
            }
        }
    }
}

class SceneManager extends AbstractManager {
    constructor(Engine) {
        super(Engine);

        this.scenes = [];
    }

    create(type, SceneData, state) {
        let newScene = new Scene(this);
        newScene.buildScene(type, SceneData, state);
        this.scenes.push(newScene);
    }

    update() {
        for(let i in this.scenes) {
            this.scenes[i].update();
        }
    }
}

export default SceneManager;