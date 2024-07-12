# Test Technique : Star wars

- npm install : pour installer les dépendances
- npm run build : pour compiler les fichers et creer un dist
- npm run start : server dev

## Fonctionnalités

- Calcul de la position d'un élément par rapport au haut de la page.
- Application de l'effet de parallaxe aux éléments spécifiés lorsqu'ils sont visibles à l'écran.
- Mise à jour dynamique de la position des éléments lors du défilement de la page.

## Installation

Aucune installation spécifique n'est nécessaire. Il suffit d'inclure ce script dans votre projet et d'ajouter l'attribut `data-parallax` aux éléments HTML que vous souhaitez affecter.

## Utilisation

1. Ajoutez l'attribut `data-parallax` à n'importe quel élément HTML pour appliquer l'effet de parallaxe. La valeur de cet attribut sera utilisée comme ratio de défilement.

    ```html
    <div data-parallax="0.5">effet parallax</div>
    ```

2. Le script va automatiquement détecter les éléments avec l'attribut `data-parallax` et leur appliquer l'effet de parallaxe.

## Détails du code

### Classe Parallax
La classe Parallax gère l'application de l'effet de parallaxe aux éléments spécifiés.

Constructeur
Le constructeur initialise les propriétés de l'élément et configure un observateur d'intersection pour détecter quand l'élément est visible à l'écran.

### Fonction `offsetTop`

Cette fonction calcule la position d'un élément par rapport au haut de la page en additionnant les positions de ses parents.


```javascript
/**
 * Calcul la position de l'element par rapport au haut de la page
 * @param {HTMLElement} element 
 * @return {number}
 */
 function offsetTop(element, acc = 0) {
    if (element.offsetParent) {
        return offsetTop(element.offsetParent, acc + element.offsetTop)
    }
    return acc + element.offsetTop
}
