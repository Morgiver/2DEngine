import AbstractSystem from "../AbstractSystem";

export default class RenderShapeRectangleSystem extends AbstractSystem {
    constructor(Manager) {
        super(Manager);
    }

    update(Entity) {
        let position = Entity.components['Position'];
        let shape    = Entity.components['RenderShapeRectangle'];
        let Draw     = this.require('Systems.Draw');

        Draw.rectangle(position.x, position.y, shape.width, shape.height, {
            fill:   shape.fill,
            stroke: shape.stroke
        });
    }
}