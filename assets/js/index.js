import searchPokedex from './searchPokedex.js'
import Pokedex from './Poquedex.js'

const getPokemon = new searchPokedex()
let AllPokemons = await getPokemon.getAllPokemon()

const POKEDEX = new Pokedex(AllPokemons)

/**
 *  Inicializar Botones y Primera Búsqueda
 */
document.getElementById('search').addEventListener('click', ()=>{
    POKEDEX.searchPokemon()
})

document.getElementById('arrowLeft').addEventListener('click',()=>{
    POKEDEX.subtractionNumber()
})

document.getElementById('arrowRight').addEventListener('click',()=>{
    POKEDEX.addNumber()
})

document.getElementById('random').addEventListener('click',()=>{
    POKEDEX.randomPokemon()
})

POKEDEX.searchPokemon();


// Inicializar Acciones del Modal
let modal = document.querySelector('.modal')
let modalC = document.querySelector('.modal-container')

document.getElementById('details').addEventListener('click',(e)=>{
    e.preventDefault()
    modalC.style.opacity = "1"
    modalC.style.visibility = "visible"
    modal.classList.toggle("modal-close")
})

document.querySelector('.close').addEventListener('click',(e)=>{
    modal.classList.toggle("modal-close")
    setTimeout(()=>{
        modalC.style.opacity = "0"
        modalC.style.visibility = "hidden"
    },850)
})

window.addEventListener('click',(e)=>{
    if(e.target == modalC){
        modal.classList.toggle("modal-close")
        setTimeout(()=>{
            modalC.style.opacity = "0"
            modalC.style.visibility = "hidden"
        },850)
    }
})