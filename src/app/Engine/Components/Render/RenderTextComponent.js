
export default class RenderTextComponent {
    constructor(text, font, size, options = {}) {
        this.SystemName = 'RenderTextSystem';
        this.text = text;
        this.font = font;
        this.size = size;
        this.x    = 0;
        this.y    = 0;

        if(options.x) this.x = options.x;
        if(options.y) this.y = options.y;
    }
}