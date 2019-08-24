import AbstractSystem from "../AbstractSystem";

export default class RenderShapeRectangleSystem extends AbstractSystem {
    constructor(Manager) {
        super(Manager);
    }

    update(Entity) {
        let position = Entity.components['PositionComponent'];
        let shape    = Entity.components['RenderShapeRectangleComponent'];
        let Draw     = this.require('System.DrawSystem');

        Draw.rectangle(position.x, position.y, shape.width, shape.height, {
            fill:   shape.fill,
            stroke: shape.stroke
        });
    }
}