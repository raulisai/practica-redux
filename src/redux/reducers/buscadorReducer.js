import {
  FETCH_POKEMON_ERROR,
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCES,
} from "../actions/buscador";

const initialState = {
  loading: false,
  pokemon: [],
  error: "",
};

const buscador = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POKEMON_SUCCES:
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        pokemon: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default buscador;
