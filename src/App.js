import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import minovia from "./img/mivida.jpg";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import CantidadPokemones from "./components/CantidadPokemones"
import ComprarPokemones from "./components/ComprarPokemones";
import store from "./redux/store";
//import CantidadaPokemonHook from "./components/CantidadaPokemonHook";
//import CompraPokemonHook from "./components/CompraPokemonHook";
import BuscadorPokemon from "./components/Buscador/BuscadorPokemon";
import ResultadoPokemon from "./components/Buscador/ResultadoPokemon";

function App() {
  console.log(store.getState());

  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <div className="card mt-5" style={{ maxWidth: "370px" }}>
              <div className="row no-gutters">
                <div className="col-4">
                  <img
                    src={minovia}
                    alt="Elamordemivida"
                    className="card-img"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <div className="card-title h3 text-center">
                      <CantidadPokemones />
                      <ComprarPokemones />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4 border-top pt-3 pb-3">
            <BuscadorPokemon />
          </div>
          <div className="col-12  border-top pt-3">
            <ResultadoPokemon />
          </div>
        </div>
        </div>
    </Provider>
  );
}

export default App;
