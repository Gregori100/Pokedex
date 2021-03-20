class searchPokedex{
    constructor(){
        this.NumberOfPokemon = 898
    }

    /**
     *  Realiza la búsqueda del pokemon buscado dependiendo del id o del nombre
     *      y regresa un json con toda su data
     * @id {number || string} 
     * @returns {json}
     */
    async getPokemon(id = 1){
        id === 184 ? id = 'azumarill' : false
        id === 568 ? id = 'trubbish' : false
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
            for (let index = 0; index < this.NumberOfPokemon; index++) {                
                Promises.push(this.getPokemon(index + 1))
            }
            const pokemon = await Promise.all(Promises)
            return pokemon
        } catch (err) {
            console.log('Ningún pokemon encontrado uwu')
        }
    }
}

export default searchPokedex