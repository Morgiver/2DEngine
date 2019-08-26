import AbstractSystem from "./AbstractSystem";

export default class EventsSystem extends AbstractSystem {
    constructor(Manager) {
        super(Manager);

        document.onmousemove = (event) => {
            this.onMouseMove(event);
        };
        document.onmousedown = (event) => {
            this.onMouseDown(event);
        };
        document.onmouseup = (event) => {
            this.onMouseUp(event);
        };

        this.define('Inputs.Mouse', {});
    }

    onMouseMove(event) {
        let mouse = this.require('Inputs.Mouse');
        mouse.x   = event.clientX;
        mouse.y   = event.clientY;
    }

    onMouseDown(event) {

    }

    onMouseUp(event) {

    }

    update(Entity) {
        let mouse    = this.require('Inputs.Mouse');
        let position = Entity.components['Position'];
        let events   = Entity.components['Events'];

    }
}