class Pokedex{
    constructor(AllPokemons){
        this.LAST_POKEMON = 898,
        this.FIRST_POKEMON = 1,
        this.Colores = {
            bug: '#afbf28',
            dark: '#513c2f',
            dragon: '#7961e3',
            electric: '#f9b716',
            fairy: '#f6b5f6',
            fighting: '#7b311b',
            fire: '#eb3e0d',
            flying: '#98a9f4',
            ghost: '#6262b5',
            grass: '#80c944',
            ground: '#d8b862',
            ice: '#afebff',
            normal: '#d0cbc4',
            poison: '#9a509b',
            psychic: '#ed4883',
            rock: '#baa257',
            steel: '#b7b7c5',
            water: '#3597f9'
        },
        this.pokemonImage = document.getElementById('pokemon'),
        this.pokemonName = document.getElementById('pokemon_name'),
        this.typeBackground = document.querySelector('.pokemon-image'),
        this.pokemonNumber = document.querySelector('.pokemon__number'),
        this.pokemonInfoLeft = document.querySelectorAll('.pokemon-info__left > p')
        this.pokemonInfoRight = document.querySelectorAll('.pokemon-info__right > p')        
        this.imageModal = document.querySelector('.image__modal > img')
        this.nameModal = document.querySelector('.modal__body > h2')
        this.AllPokemons = AllPokemons
    }

    /**
     *  Asigna los valores de la 'data' a los elementos HTML
     *  @Pokemon {json} 
     */
    assignValues = (Pokemon) =>{
        try{    
            // Valores de la pokedex
            this.pokemonImage.src = Pokemon[0].image
            this.pokemonName.value = Pokemon[0].name
            this.pokemonNumber.innerHTML = Pokemon[0].id
            this.typeBackground.style.backgroundColor = this.Colores[Pokemon[0].type[0].type.name]
            
            // Valores del modal
            this.pokemonInfoRight[0].innerHTML = ''
            this.pokemonInfoRight[1].innerHTML = ''
            this.pokemonInfoLeft[0].innerHTML = Pokemon[0].height
            this.pokemonInfoLeft[1].innerHTML = Pokemon[0].weight    

            this.imageModal.src = Pokemon[0].image
            this.nameModal.innerHTML = Pokemon[0].name

            // Mostrar el tipo de pokemon y sus habilidades
            for (let index = 0; index < Pokemon[0].type.length; index++) {
                this.pokemonInfoRight[0].innerHTML += `<span class= "type ${Pokemon[0].type[index].type.name}" >${Pokemon[0].type[index].type.name}</span>`
            }
            for (let index = 0; index < Pokemon[0].abilities.length; index++) {
                this.pokemonInfoRight[1].innerHTML += `<span>${Pokemon[0].abilities[index].ability.name}</span>`
            }
        }catch (err){
            console.log('Ningun pokemon encontrado',err)
        }
    }
    
    /**
     *  Realiza una búsqueda del pokemon ingresado en el input dependiendo del si
     *      se ingreso nombre o número
     */
    searchPokemon = () =>{
        if(!Number.isInteger(parseInt(this.pokemonName.value))){
            let Pokemon = this.AllPokemons.filter(id => {
                return id.name === this.pokemonName.value
            })
            this.assignValues(Pokemon)
        } else{
            let Pokemon = this.AllPokemons.filter(id => {
                return id.id === parseInt(this.pokemonName.value)
            })
            this.assignValues(Pokemon)
        }    
    };            
    
    /**
     *  Reduce en 1 al índice actual del pokemon y posteriormente actualiza los datos del pokemon mostrado
     */
    subtractionNumber = () =>{
        parseInt(this.pokemonNumber.innerHTML) === this.FIRST_POKEMON ? this.pokemonNumber.innerHTML = this.LAST_POKEMON + 1: false
        let Pokemon = this.AllPokemons.filter(id => {
            return id.id === parseInt(this.pokemonNumber.innerHTML)-1
        })
    
        this.assignValues(Pokemon)
    }
    
    /**
     *  Aumenta en 1 al índice actual del pokemon y posteriormente actualiza los datos del pokemon mostrado
     */
    addNumber = () =>{
        parseInt(this.pokemonNumber.innerHTML) === this.LAST_POKEMON ? this.pokemonNumber.innerHTML = this.FIRST_POKEMON - 1: false
        let Pokemon = this.AllPokemons.filter(id => {
            return id.id === parseInt(this.pokemonNumber.innerHTML)+1
        })
    
        this.assignValues(Pokemon)
    }

    /**
     *  Genera un numero aleatorio y posteriormente actualiza los datos del pokemon mostrado
     */
    randomPokemon = () =>{
        let random = Math.floor(Math.random() * (this.LAST_POKEMON - this.FIRST_POKEMON)) + this.FIRST_POKEMON;
        let Pokemon = this.AllPokemons.filter(id => {
            return id.id === random
        })
        this.assignValues(Pokemon)
    }
}

export default Pokedex