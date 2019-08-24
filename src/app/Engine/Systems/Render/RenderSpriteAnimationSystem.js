import SystemManager from "../../Managers/SystemManager";


class RenderSpriteAnimationSystem extends SystemManager {
    constructor(Manager) {
        super(Manager);

        this.Draw     = this.require('System.DrawSystem');
        this.Resource = this.require('System.ResourceSystem');
    }

    update(Entity) {
        let Position   = Entity.components['PositionComponent'];
        let SpriteData = Entity.components['AnimationCursorComponent'];
        let image      = this.Resource.getAsset('image', SpriteData.assetname);

        this.Draw.image(
            image,
            SpriteData.row * SpriteData.h,
            SpriteData.frame * SpriteData.w,
            SpriteData.w,
            SpriteData.h,
            Position.x,
            Position.y,
            SpriteData.w,
            SpriteData.h
        );
    }
}

export default RenderSpriteAnimationSystem;