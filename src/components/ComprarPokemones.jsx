/* eslint-disable no-useless-constructor */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  buy_pokemon_action,
  return_pokemon_action,
} from "../redux/actions/gameShop";

class ComprarPokemones extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <>
        <button
          className="btn btn-dark btn-sm mb-2"
          onClick={() => {
            this.props.buy_pokemon_action(1);
          }}
        >
          Comprar pokemon
        </button>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => {
            this.props.return_pokemon_action(1);
          }}
        >
          Regresar pokemon
        </button>
      </>
    );
  }
}

ComprarPokemones.propTypes = {};

const mapDispatchToProps = {
  buy_pokemon_action,
  return_pokemon_action,
};

export default connect(null, mapDispatchToProps)(ComprarPokemones);
