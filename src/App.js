import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { getPokemon } from './ducks/pokemon';

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

// this will allow the app to boot up and then grab the data
  componentDidMount() {
    this.props.getPokemon();
  }

  render() {

    const pokeMonsters = this.props.pokemon.map( (pokemon, i) => {
      return (
        <div key={ i }>{ pokemon.name }</div>
        ) 
      })


    return (
      <div>
        <h1>Pokemon Store</h1>
          { pokeMonsters }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon
  }
}

export default connect( mapStateToProps, { getPokemon } )( App );
