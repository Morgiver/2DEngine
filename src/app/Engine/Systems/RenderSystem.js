import AbstractSystem from "./AbstractSystem";

export default class RenderSystem extends AbstractSystem {
    constructor(Manager) {
        super(Manager);

        this.Draw = this.require('Systems.Draw');
    }

    renderText(Entity, config) {
        let x = config.x + Entity.components['Position'].x;
        let y = config.y + Entity.components['Position'].y;

        this.Draw.text(x, y, config.text, config.options);
    }

    renderImage(Entity, config) {
        let image = this.require('Assets.' + config.namespace);
        let x = config.x + Entity.components['Position'].x;
        let y = config.y + Entity.components['Position'].y;

        this.Draw.image(image, x, y, config.width, config.height);
    }

    renderRectangle(Entity, config) {
        let x = config.x + Entity.components['Position'].x;
        let y = config.y + Entity.components['Position'].y;

        this.Draw.rectangle(x, y, config.width, config.height, config.options);
    }

    renderTriangle(Entity, config) {
        return;
    }

    renderVectors(Entity, config) {
        return;
    }

    update(Entity) {
        let shapes = Entity.components['Render'];
        for(let i in shapes) {
            if(i !== 'SystemName') {
                switch(shapes[i].type) {
                    case "image":
                        this.renderImage(Entity, shapes[i]);
                        break;
                    case "rectangle":
                        this.renderRectangle(Entity, shapes[i]);
                        break;
                    case "triangle":
                        this.renderTriangle(Entity, shapes[i]);
                        break;
                    case "vectors":
                        this.renderVectors(Entity, shapes[i]);
                        break;
                    case "text":
                        this.renderText(Entity, shapes[i]);
                        break;
                }
            }
        }
    }
}