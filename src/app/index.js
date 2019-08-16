import ResourceSystem  from './Engine/ResourceSystem.js';
import DrawSystem      from './Engine/DrawSystem.js';

const SCREEN_WIDTH  = 500;
const SCREEN_HEIGHT = 500;

const resources = [
    { type: 'image', name: 'morgiYummy', src: './ressources/images/morgiYummy.png'}
];

// On créé le système de ressources
const assets = new ResourceSystem();
// On créé le système de dessins
const draw = new DrawSystem("game", SCREEN_WIDTH, SCREEN_HEIGHT, '2d');

assets.loadResources(resources).then(() => {
    draw.loopAnimationFrame();
}).catch((e) => console.error(e));

