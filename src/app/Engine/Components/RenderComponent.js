
export default class RenderComponent {
    constructor() {
        this.SystemName = "Render";
        this.shapes = [];

        for(let i in arguments) {
            this.shapes.push(arguments[i]);
        }
    }
}