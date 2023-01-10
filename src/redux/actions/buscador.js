import Axios from "axios";

export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCES = "FETCH_POKEMON_SUCCES";
export const FETCH_POKEMON_ERROR = "FETCH_POKEMON_ERROR";

export const fectchPokemonRequest = () => {
  return {
    type: FETCH_POKEMON_REQUEST,
  };
};

export const fectchPokemonSucces = (pokemon) => {
  return {
    type: FETCH_POKEMON_SUCCES,
    payload: pokemon,
  };
};

export const fectchPokemonError = (error) => {
  return {
    type: FETCH_POKEMON_ERROR,
    payload: error,
  };
};

const fetchPokemon = (valor) => {
  let url = "https://pokeapi.co/api/v2/pokemon/" + valor;

  return (dispatch) => {
    dispatch(fectchPokemonRequest());
    Axios.get(url).then((response) => {
      dispatch((fectchPokemonSucces([response.data])));
    }).catch((e)=>{
      
      dispatch(fectchPokemonError('No se encontro pokemon'))
    })

  };
};

export default fetchPokemon;
