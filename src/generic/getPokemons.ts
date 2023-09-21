import axios from "axios";
import { Pokemon } from "../interfaces/Pokemon";

export const getPokemons = async (pokemonID: number): Promise<Pokemon> => {
    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)

    return data
}