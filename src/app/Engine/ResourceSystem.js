/**
 * ResourceSystem
 */
class ResourceSystem {
    constructor() {
        this.resources          = [];
        this.resources['image'] = [];
    }

    /**
     * loadResources
     * @description Parcours un tableau d'adresse de ressources pour les charger une à une et renvoyer une promise
     * @param resources
     * @returns {Promise<unknown[]>}
     */
    loadResources(resources) {
        let arrayPromise = [];

        for(let i in resources) {
            if(resources[i].type === 'image') arrayPromise.push(this.addImage(resources[i].name, resources[i].src));
        }

        return Promise.all(arrayPromise);
    }

    /**
     * addImage
     * @description Ajoute une image aux tableau des ressources
     * @param name
     * @param src
     * @returns {Promise<unknown>}
     */
    addImage(name, src) {
        return new Promise((resolve, reject) => {
            let image = new Image();
            image.src = src;
            image.onload = () => {
                resolve();
            };
            this.resources['image'][name] = image;
        });
    }

    /**
     * getAsset
     * @description retourne une ressource selon son type et son nom
     * @param type
     * @param name
     * @returns {*}
     */
    getAsset(type, name) {
        return this.resources[type][name];
    }
}

export default ResourceSystem;