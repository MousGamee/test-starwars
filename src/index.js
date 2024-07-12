import './style.css'
import logo from './assets/images/logo.png'
import gameCover from './assets/images/game-cover.png'
import robots from './assets/images/robots.png'


const logoImage = document.getElementById('logo')
const gameCoverImage = document.getElementById('game-cover')
const robotsImage = document.getElementById('robots')

logoImage.src = logo
gameCoverImage.src = gameCover
robotsImage.src = robots


// toggle the menu
const mobileNavToggle = document.getElementById('hamburger-icon')
mobileNavToggle.addEventListener('click', () => {
    mobileNavToggle.classList.toggle('open')
})

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

class Parallax {
    /**
     * 
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element
        this.ratio = parseFloat(element.dataset.parallax)
        this.onScroll = this.onScroll.bind(this)
        this.onIntersection = this.onIntersection.bind(this)
        const observer = new IntersectionObserver(this.onIntersection)
        observer.observe(element)
        this.onScroll()
    }

    /**
     * lance le parralax effet seulement quand l'element est visible a l'ecran
     * @param { IntersectionObserverEntry[]} entries
     */
    onIntersection(entries) {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                document.addEventListener('scroll', this.onScroll)
            } else {
                document.removeEventListener('scroll', this.onScroll)

            }
        }
    }

    onScroll() {
        const scrollY = window.scrollY + window.innerHeight / 2
        const elementY = offsetTop(this.element) + this.element.offsetHeight / 2
        const diffY = elementY - scrollY
        this.element.style.setProperty('transform', `translateY(${diffY * -1 * this.ratio}px)`)
    }

    /**
     * 
     * @returns {Parallax[]}
     */
    static bind() {
        return Array.from(document.querySelectorAll('[data-parallax]')).map(element => {
            return new Parallax(element)
        })
    }
}

Parallax.bind()

