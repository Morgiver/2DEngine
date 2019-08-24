import AbstractEntity from "../AbstractEntity";

class ButtonEntity extends AbstractEntity {
    constructor(Manager, args = []) {
        super(Manager);
    }

    updateColor(color) {
        this.components['RenderShapeRectangleComponent'].fill.color = color;
    }

    onMouseClick() {

    }

    onMouseHover() {

    }

    onMouseOut() {

    }
}

export default ButtonEntity;