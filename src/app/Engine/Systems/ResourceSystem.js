/**
 * ResourceSystem
 */
import AbstractSystem from "./AbstractSystem";

class ResourceSystem extends AbstractSystem {
    constructor(Engine) {
        super(Engine);
    }

    /**
     * loadResources
     * @description Parcours un tableau d'adresse de resources pour les charger une à une et renvoyer une promise
     * @param resources
     * @returns {Promise<unknown[]>}
     */
    loadResources(resources) {
        let arrayPromise = [];

        for(let i in resources) {
            if(resources[i].type === 'image') arrayPromise.push(this.addImage(resources[i].namespace, resources[i].src));
        }

        return Promise.all(arrayPromise);
    }

    /**
     * addImage
     * @description Ajoute une image aux tableau des resources
     * @param name
     * @param src
     * @returns {Promise<unknown>}
     */
    addImage(namespace, src) {
        return new Promise((resolve, reject) => {
            let image = new Image();
            image.src = src;
            image.onload = () => {
                resolve();
            };

            this.define('Assets.' + namespace, image);
        });
    }
}

export default ResourceSystem;