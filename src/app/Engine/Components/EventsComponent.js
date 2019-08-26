

export default class EventsComponent {
    constructor() {
        this.SystemName  = 'Events';

        for(let i in arguments) {
            this[arguments[i].name] = arguments[i];
        }
    }
}