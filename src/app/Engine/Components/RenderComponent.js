
export default class RenderComponent {
    constructor() {
        this.SystemName = "Render";
        for(let i in arguments) {
            this[arguments[i].name] = arguments[i];
        }
    }
}