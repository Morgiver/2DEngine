import AbstractSystem from "../AbstractSystem";

export default class RenderSystem extends AbstractSystem {
    constructor(Manager) {
        super(Manager);
    }

    update(Entity) {
        let position = Entity.components['PositionComponent'];
        let shape    = Entity.components['Render'];
        let Draw     = this.require('System.DrawSystem');

        switch(Entity.shape) {
            case "rectangle":
                Draw.rectangle(position.x, position.y, );
                break;
        }
    }
}