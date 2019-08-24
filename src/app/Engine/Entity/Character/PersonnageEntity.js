import AbstractEntity from "../AbstractEntity";

class PersonnageEntity extends AbstractEntity {
    constructor(Manager, x, y) {
        super(Manager);

        this.addComponent('PositionComponent', [x, y]);
        this.addComponent('AnimationCursorComponent', ['perso', 0, 2, 64, 64, 1]);
    }
}

export default PersonnageEntity;