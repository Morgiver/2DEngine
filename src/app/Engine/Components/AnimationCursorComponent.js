

class AnimationCursorComponent {
    constructor(assetname, row, frame, w, h, speed) {
        this.SystemName = 'RenderSpriteAnimationSystem';
        this.assetname = assetname;
        this.row       = row;
        this.frame     = frame;
        this.w         = w;
        this.h         = h;
        this.speed     = speed;
    }
}

export default AnimationCursorComponent;