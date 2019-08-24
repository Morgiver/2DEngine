import AbstractSystem from "../AbstractSystem";


export default class RenderTextSystem extends AbstractSystem {
    constructor(Manager) {
        super(Manager);
    }

    update(Entity) {
        let position = Entity.components['PositionComponent'];
        let text     = Entity.components['RenderTextComponent'];
        let Draw     = this.require('System.DrawSystem');
        let x        = position.x + text.x;
        let y        = position.y + text.y;

        Draw.text(x, y, text.text, { size: text.size, font: text.font, color: 'black' });
    }
}