import React from 'react';
import { useDispatch } from 'react-redux';
import { buy_pokemon_action, return_pokemon_action } from '../redux/actions/gameShop';


const CompraPokemonHook = () => {

  const dispatch = useDispatch()

        return (
            <>
            <button
              className="btn btn-dark btn-sm mb-2"
              onClick={() => {
                dispatch(buy_pokemon_action(1))
              }}
            >
              Comprar pokemon
            </button>
            <button
              className="btn btn-dark btn-sm"
              onClick={() => {
                dispatch(return_pokemon_action(1))
              }}
            >
              Regresar pokemon
            </button>
          </>
            
        );
    }




export default CompraPokemonHook
