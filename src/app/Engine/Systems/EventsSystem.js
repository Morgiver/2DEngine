import AbstractSystem from "./AbstractSystem";

export default class EventsSystem extends AbstractSystem {
    constructor(Manager) {
        super(Manager);

        document.onmousemove = this.onMouseMove;
        document.onmousedown = this.onMouseDown;
        document.onmouseup   = this.onMouseUp;
    }

    onMouseMove(event) {

    }

    onMouseDown(event) {

    }

    onMouseUp(event) {

    }

    update(Entity) {

    }
}