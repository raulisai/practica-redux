import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetchPokemon from "../../redux/actions/buscador";

function BuscadorPokemon() {
  const dispatch = useDispatch();
  const [name_pokemon, set_name_pokemon] = useState('pikachu');

  return (
    <div className="form-grup">
      <label className="text-white"> Buscar Pokemon</label>
      <input
        type="text"
        className="form-control"
        id="buscar-pokemon"
        value={name_pokemon}
        onChange={(event) => {
          set_name_pokemon(event.target.value);
        }}
      />
      <button
        className="btn btn-primary mt-3"
        onClick={()=>{
            dispatch(fetchPokemon(name_pokemon))
        } }
      >
        Buscar
      </button>
    </div>
  );
}

export default BuscadorPokemon;
