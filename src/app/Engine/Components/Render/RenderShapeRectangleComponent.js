import RenderShapeComponent from './RenderShapeComponent';

export default class RenderShapeRectangleComponent extends RenderShapeComponent {
    constructor(w, h, fColor, sColor, sWidth) {
        super("rectangle");

        this.SystemName = 'RenderShapeRectangleSystem';

        this.width  = w;
        this.height = h;
        this.fill = {
            color: fColor
        };
        this.stroke = {
            color: sColor,
            width: sWidth
        }
    }
}