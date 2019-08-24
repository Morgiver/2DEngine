import AbstractSystem from "./AbstractSystem";

const LOOP_ANIMATION_STOP    = 'LOOP_ANIMATION_STOP';
const LOOP_ANIMATION_START   = 'LOOP_ANIMATION_START';
const LOOP_ANIMATION_PAUSE   = 'LOOP_ANIMATION_PAUSE';
const LOOP_ANIMATION_RUNNING = 'LOOP_ANIMATION_RUNNING';

class LoopAnimationSystem extends AbstractSystem {
    constructor(Manager) {
        super(Manager);
        this.DrawSystem = this.require('System.DrawSystem');
        this.loopstate  = LOOP_ANIMATION_STOP;
    }

    /**
     * loopAnimationFrame
     * @description Opère la procédure d'exécution des
     */
    loopAnimationFrame(state) {
        if(state) this.loopstate = state;

        switch(this.loopstate) {
            case LOOP_ANIMATION_RUNNING:
                this.DrawSystem.clearScreen();

                this.manager.Engine.Scenes.update();

                window.requestAnimationFrame(() => {
                    this.loopAnimationFrame();
                });
                break;
            case LOOP_ANIMATION_START:

                break;
            case LOOP_ANIMATION_STOP:

                break;
            case LOOP_ANIMATION_PAUSE:
                break;
            default:
                this.loopAnimationFrame();
                break;
        }
    }
}

export default LoopAnimationSystem