import AbstractSystem from "../AbstractSystem";


export default class RenderTextSystem extends AbstractSystem {
    constructor(Manager) {
        super(Manager);
    }

    update(Entity) {
        let position = Entity.components['Position'];
        let text     = Entity.components['RenderText'];
        let Draw     = this.require('Systems.Draw');
        let x        = position.x + text.x;
        let y        = position.y + text.y;

        Draw.text(x, y, text.text, { size: text.size, font: text.font, color: 'black' });
    }
}