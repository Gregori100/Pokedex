class Pokedex{
    constructor(AllPokemons){
        this.LAST_POKEMON = 899,
        this.FIRST_POKEMON = 0,
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
        this.AllPokemons = AllPokemons
    }

    /**
     *  Asigna los valores de la 'data' a los elementos HTML
     *  @Pokemon {json} 
     */
    assignValues = async (Pokemon) =>{
        try{    
            this.pokemonImage.src = await Pokemon[0].sprites.other['official-artwork'].front_default
            this.pokemonName.value = await Pokemon[0].name
            this.pokemonNumber.innerHTML = await Pokemon[0].id
            this.typeBackground.style.backgroundColor = await this.Colores[Pokemon[0].types['0'].type.name]
        }catch (err){
            console.log('Ningun pokemon encontrado boludo',err)
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
        parseInt(this.pokemonNumber.innerHTML)-1 === this.FIRST_POKEMON ? this.pokemonNumber.innerHTML = this.LAST_POKEMON : false
        let Pokemon = this.AllPokemons.filter(id => {
            return id.id === parseInt(this.pokemonNumber.innerHTML)-1
        })
    
        this.assignValues(Pokemon)
    }
    
    /**
     *  Aumenta en 1 al índice actual del pokemon y posteriormente actualiza los datos del pokemon mostrado
     */
    addNumber = () =>{
        parseInt(this.pokemonNumber.innerHTML)+1 === this.LAST_POKEMON ? this.pokemonNumber.innerHTML = this.FIRST_POKEMON : false
        let Pokemon = this.AllPokemons.filter(id => {
            return id.id === parseInt(this.pokemonNumber.innerHTML)+1
        })
    
        this.assignValues(Pokemon)
    }

    /**
     *  Genera un numero aleatorio y posteriormente actualiza los datos del pokemon mostrado
     */
    randomPokemon = () =>{
        let random = 0
        random = Math.floor(Math.random() * (this.LAST_POKEMON - this.FIRST_POKEMON)) + this.FIRST_POKEMON;
        let Pokemon = this.AllPokemons.filter(id => {
            return id.id === random
        })
        this.assignValues(Pokemon)
    }
}

export default Pokedex