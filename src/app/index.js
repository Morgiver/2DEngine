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
            //{ src: 'resources/images/perso.png', type: 'image', namespace: 'Images.perso' }
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
                            Render: [
                                {
                                    name: 'START_GAME_BUTTON_SHAPE',
                                    type: 'rectangle',
                                    x: 0,
                                    y: 0,
                                    width: 250,
                                    height: 50,
                                    options: {
                                        stroke: {
                                            color: 'black',
                                            width: 5
                                        },
                                        fill: {
                                            color: 'red'
                                        }
                                    }
                                },
                                {
                                    name: 'START_GAME_BUTTON_TEXT',
                                    type: 'text', x: 25, y: 30, text: 'START_GAME_BUTTON', options: {
                                        font: 'serif', size: 16, color: 'white'
                                    }
                                }
                            ],
                            Events: [
                                {
                                    name: 'onMouseOver',
                                    actions: [
                                        {
                                            type: 'update',
                                            target: 'Render.START_GAME_BUTTON.options.fill.color',
                                            value: 'blue'
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            }, 'DRAWABLE_SCENE');

            loop.loopAnimationFrame('LOOP_ANIMATION_RUNNING');
        }).catch((e) => console.error(e));
    }
}

let myGame = new Game('game', 500, 500, '2d');
myGame.start();