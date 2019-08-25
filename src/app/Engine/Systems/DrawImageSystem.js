import AbstractSystem from "./AbstractSystem";

class DrawImageSystem extends AbstractSystem {
    constructor(Manager) {
        super(Manager);

        this.Draw     = this.require('Systems.Draw');
        this.Resource = this.require('Systems.Resource');
    }

    update(Entity) {
        let ImageData = Entity.components['RenderImageComponent'];
        let image     = this.Resource.getAsset('image', ImageData.assetname);
        this.Draw.image(image, ImageData.x, ImageData.y, ImageData.w, ImageData.h);
    }
}

export default DrawImageSystem;