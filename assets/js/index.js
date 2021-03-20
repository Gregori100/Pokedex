import searchPokedex from './searchPokedex.js'
import Pokedex from './Poquedex.js'

const getPokemon = new searchPokedex()
let AllPokemons = await getPokemon.getAllPokemon()

const POKEDEX = new Pokedex(AllPokemons)

/**
 *  Inicializar Botones y Primera Búsqueda
 */
document.getElementById('search').addEventListener('click',async ()=>{
    POKEDEX.searchPokemon()
})

document.getElementById('arrowLeft').addEventListener('click',async()=>{
    POKEDEX.subtractionNumber()
})

document.getElementById('arrowRight').addEventListener('click',async()=>{
    POKEDEX.addNumber()
})

document.getElementById('random').addEventListener('click',async()=>{
    POKEDEX.randomPokemon()
})

POKEDEX.searchPokemon();