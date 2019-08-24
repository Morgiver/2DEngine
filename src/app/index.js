
// System
import Tools                         from "./Engine/Tools";
import Engine                        from "./Engine/Engine";
import DrawSystem                    from "./Engine/Systems/DrawSystem";
import ResourceSystem                from "./Engine/Systems/ResourceSystem";
import LoopAnimationSystem           from "./Engine/Systems/LoopAnimationSystem";
import DrawImageSystem               from "./Engine/Systems/DrawImageSystem";
import RenderSpriteAnimationSystem   from "./Engine/Systems/Render/RenderSpriteAnimationSystem";
import EntityComponentSystem         from "./Engine/Systems/EntityComponentSystem";
import RenderSystem                  from "./Engine/Systems/Render/RenderSystem";
import RenderShapeRectangleSystem    from "./Engine/Systems/Render/RenderShapeRectangleSystem";
import RenderTextSystem              from "./Engine/Systems/Render/RenderTextSystem";
// Entity
import PersonnageEntity              from "./Engine/Entity/Character/PersonnageEntity";
import ButtonEntity                  from "./Engine/Entity/Menu/ButtonEntity";
// Component
import RenderImageComponent          from "./Engine/Components/Render/RenderImageComponent";
import PositionComponent             from "./Engine/Components/PositionComponent";
import AnimationCursorComponent      from "./Engine/Components/AnimationCursorComponent";
import RenderShapeRectangleComponent from "./Engine/Components/Render/RenderShapeRectangleComponent";
import EventsMouseComponent          from "./Engine/Components/Events/EventsMouseComponent";
import RenderTextComponent from "./Engine/Components/Render/RenderTextComponent";

class Game extends Engine {
    constructor(name, SCREEN_WIDTH, SCREEN_HEIGHT, context) {
        super();

        this.addSystem('Tools',                 Tools);
        this.addSystem('ResourceSystem',        ResourceSystem);
        this.addSystem('DrawSystem',            DrawSystem, [name, SCREEN_WIDTH, SCREEN_HEIGHT, context]);
        this.addSystem('DrawImageSystem',       DrawImageSystem);
        this.addSystem('RenderSpriteAnimationSystem', RenderSpriteAnimationSystem);
        this.addSystem('EntityComponentSystem', EntityComponentSystem);
        this.addSystem('LoopAnimationSystem',   LoopAnimationSystem);
        this.addSystem('RenderSystem',          RenderSystem);
        this.addSystem('RenderShapeRectangleSystem', RenderShapeRectangleSystem);
        this.addSystem('RenderTextSystem',           RenderTextSystem);

        this.addClassComponent('RenderShapeRectangleComponent', RenderShapeRectangleComponent);
        this.addClassComponent('RenderImageComponent',     RenderImageComponent);
        this.addClassComponent('PositionComponent',        PositionComponent);
        this.addClassComponent('AnimationCursorComponent', AnimationCursorComponent);
        this.addClassComponent('EventsMouseComponent',     EventsMouseComponent);
        this.addClassComponent('RenderTextComponent',      RenderTextComponent);

        this.addClassEntity('PersonnageEntity', PersonnageEntity);
        this.addClassEntity('ButtonEntity', ButtonEntity);
    }

    start() {
        let resource = this.require('System.ResourceSystem');
        let loop     = this.require('System.LoopAnimationSystem');
        let sManager = this.Scenes;

        resource.loadResources([
            { src: 'resources/images/perso.png', type: 'image', name: 'perso' }
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
                        entityClass: 'ButtonEntity',
                        args: [],
                        components: {
                            PositionComponent: [25, 25],
                            RenderShapeRectangleComponent: [150, 25, 'red', 'blue', 5],
                            RenderTextComponent: ['START_GAME_BUTTON', 'serif', 12, {x: 15, y: 15}],
                            EventsComponent: [
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

let newGame = new Game('mygame', 500, 500, '2d');
newGame.start();