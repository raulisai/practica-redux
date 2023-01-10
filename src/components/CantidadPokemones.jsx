/* eslint-disable no-useless-constructor */
import React, { Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

class CantidadPokemones extends Component {
   
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
          <>

           unidades : {this.props.game_shop.pokemon}

         </>   
        )
    }
}


CantidadPokemones.propTypes = {
    
};

const mapStateToProps = (state) => {
    return {
        game_shop: state.game_shop
    }
}


export default connect(mapStateToProps)(CantidadPokemones)
