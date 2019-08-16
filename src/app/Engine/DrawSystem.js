
const LOOP_ANIMATION_STOP    = 'LOOP_ANIMATION_STOP';
const LOOP_ANIMATION_START   = 'LOOP_ANIMATION_START';
const LOOP_ANIMATION_RUNNING = 'LOOP_ANIMATION_RUNNING';

/**
 * Une classe DrawSystem permet d'initialiser le canvas quand on veut
 * et rend le code réutilisable
 */
class DrawSystem {
    constructor(id, width, height, context) {
        this.loopstate = LOOP_ANIMATION_RUNNING;

        // Création de l'élément Canvas
        this.canvas = document.createElement("canvas");
        // Création du contexte
        this.ctx = this.canvas.getContext(context || '2d');

        // Initialisation de l'élément Canvas
        this.canvas.id     = id     || "game"; // On lui donne un ID
        this.canvas.width  = width  || 500;    // Une largeur
        this.canvas.height = height || 500;    // Une hauteur

        // Injection de l'élément Canvas
        document.body.appendChild(this.canvas);
    }

    /**
     * clearScreen
     * @description nettoie l'écran entièrement avant la prochaine frame
     * @param w
     * @param h
     */
    clearScreen(w, h) {
        this.ctx.clearRect(0, 0, w, h);
    }

    /**
     * image
     * @description Dessine une image donnée
     * @param image
     * @param x
     * @param y
     * @param w
     * @param h
     */
    image(image, x, y, w, h) {
        let args = [];

        for(let i in arguments) {
            args.push(arguments[i]);
        }

        if(w && !h) args.push(w);

        this.ctx.drawImage(...args);
    }

    rectangle(x, y, w, h, options) {
        if(options.fill) {
            this.ctx.fillStyle = options.fill.color;
            this.ctx.fill();
        }

        if(options.stroke) {
            this.ctx.strokeStyle = options.stroke.color;
            this.ctx.stroke();
        }

        this.ctx.rect(x, y, w, h);
    }

    drawEntities() {
        this.rectangle(100, 100, 50, 50, { fill: { color: 'red' }, stroke: { color: 'black' } });
    }

    /**
     * loopAnimationFrame
     * @description Dessine l'entièreté de la frame
     */
    loopAnimationFrame() {
        switch(this.loopstate) {
            case LOOP_ANIMATION_RUNNING:
                this.clearScreen(this.canvas.width, this.canvas.height);
                this.drawEntities();

                window.requestAnimationFrame(() => {
                    this.loopAnimationFrame();
                });
                break;
            case LOOP_ANIMATION_START:

                break;
            case LOOP_ANIMATION_STOP:

                break;
            default:
                this.loopAnimationFrame();
                break;
        }
    }
}

export default DrawSystem;