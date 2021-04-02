class searchPokedex{
    constructor(){
        this.NumberMaxOfPokemon = 898
    }

    /**
     *  Realiza la búsqueda del pokemon buscado dependiendo del id o del nombre
     *      y regresa un json con toda su data
     * @id {number || string} 
     * @returns {json}
     */
    async getPokemon(id = 1){
        id === 138 ? id = 'omanyte' : false
        id === 145 ? id = 'zapdos' : false
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()
            return data            
        } catch (error) {
            console.log(error)
        }
    }

    /**
     *  Se obtiene todos los datos de todos los pokemon y los retorna en forma de array
     * @returns {Array}
     */
    async getAllPokemon(){
        try {
            const Promises = []
            for (let index = 1; index <= this.NumberMaxOfPokemon; index++) {                
                Promises.push(this.getPokemon(index))
            }

            const promise_resolution = await Promise.all(Promises)

            const AllPokemons = promise_resolution.map(data => ({
                name: data.name,
                id: data.id,
                image: data.sprites.other['official-artwork'].front_default,
                type: data.types,
                abilities: data.abilities,
                height: data.height,
                weight: data.weight,
            }))
            // console.log(promise_resolution)
            //console.log(AllPokemons)
            return AllPokemons
        } catch (err) {
            console.log('Ningún pokemon encontrado uwu',err)
        }
    }
}

export default searchPokedex