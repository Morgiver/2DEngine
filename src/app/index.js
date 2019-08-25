import Engine from "./Engine/Engine";

class Game extends Engine {
    constructor(name, SCREEN_WIDTH, SCREEN_HEIGHT, context) {
        super(name, SCREEN_WIDTH, SCREEN_HEIGHT, context);
    }

    start() {
        let resource = this.require('Systems.Resource');
        let loop     = this.require('Systems.LoopAnimation');
        let sManager = this.require('Managers.Scene');

        resource.loadResources([
            { src: 'resources/images/perso.png', type: 'image', namespace: 'Images.perso' }
        ]).then(() => {
            sManager.create('GAME_LAYER', {
                entities: []
            }, 'HIDDEN_SCENE');
            sManager.create('HUD_LAYER', {
                entities: []
            }, 'HIDDEN_SCENE');
            sManager.create('MENU_LAYER', {
                entities: [
                    {
                        name: 'START_GAME_BUTTON',
                        entityClass: 'default',
                        args: [],
                        components: {
                            Position: [25, 25],
                            RenderShapeRectangle: [150, 25, 'red', 'blue', 5],
                            RenderText: ['START_GAME_BUTTON', 'serif', 12, {x: 15, y: 15}],
                            Events: [
                                { event: 'onMouseClick', triggername: 'START_GAME', options: { difficulty: 'normal' }},
                                { event: 'onMouseHover', fn: 'updateColor', options: { color: 'blue' }},
                                { event: 'onMouseOut', fn: 'updateColor', options: { color: 'red' }}
                            ]
                        }
                    }
                ]
            }, 'DRAWABLE_SCENE');

            loop.loopAnimationFrame('LOOP_ANIMATION_RUNNING');
        });
    }
}

let myGame = new Game('game', 500, 500, '2d');
myGame.start();