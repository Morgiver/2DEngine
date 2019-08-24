
import AbstractSystem from "./AbstractSystem";

/**
 * Une classe DrawSystem permet d'initialiser le canvas quand on veut
 * et rend le code réutilisable
 */
class DrawSystem extends AbstractSystem {
    constructor(Manager, id, width, height, context) {
        super(Manager);
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
     * @description nettoie l'écran entièrement
     */
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
        this.ctx.drawImage(...arguments);
    }

    /**
     * rectangle
     * @description Dessine un rectangle
     * @param x
     * @param y
     * @param w
     * @param h
     * @param options
     */
    rectangle(x, y, w, h, options = {}) {
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

    /**
     * text
     * @description Dessine du texte
     * @param x
     * @param y
     * @param text
     * @param options
     */
    text(x, y, text, options = {}) {
        if(options.font)  this.ctx.font      = options.size +' '+ options.font;
        if(options.color) this.ctx.fillStyle = options.color;
        this.ctx.fillText(text, x, y);
    }
}

export default DrawSystem;