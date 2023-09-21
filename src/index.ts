import { getPokemons } from "./generic/getPokemons";

getPokemons(4)
    .then(pokemon => console.log(pokemon.sprites.front_default))
    .catch(error => console.error(error))
    .finally(() => console.log('Terminada'))