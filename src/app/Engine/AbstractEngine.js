
class AbstractEngine {
    constructor() {}

    /**
     * define
     * @description Défini une value selon un namepsace précis
     * @param namespace
     * @param value
     */
    define(namespace, value = {}) {
        // On split le namespace à chaque point
        let parts = namespace.split('.');
        // On défini la racine de notre namespace comme étant le contexte
        // global de l'instance de notre Engine
        let root = this;
        // On parcours le namespace
        for(let i = 0; i < parts.length; ++i) {
            // Tans qu'on est pas dans le dernier nom on redéfini
            // la racine.
            if(parts.length - 1 > i) {
                // Si le nom d'espace suivant n'existe pas on le créé
                if(!root[parts[i]]) root[parts[i]] = {};
                root = root[parts[i]]; // Puis on redéfini la racine
            } else {
                // sinon on défini la valeur
                root[parts[i]] = value;
            }
        }
    }

    /**
     * require
     * @description retourne une valeur contenu dans le namespace
     * @param namespace
     * @returns {AbstractEngine}
     */
    require(namespace) {
        let parts = namespace.split('.');
        let root = this;

        for (let i = 0; i < parts.length; ++i) {
            if (!root[parts[i]]) {
                let ns = '';
                for (let j = 0; j <= i; ++j) ns = ns + parts[j] + '.';
                throw new Error('Unknown ' + ns + ' namespace');
            } else {
                root = root[parts[i]];
            }
        }

        return root;
    }
}

export default AbstractEngine;