import axios from 'axios';

const initialState = {
    pokemon: []
}

const GET_POKE = "GET_POKE";

export function getPokemon() {
    const pokeData = axios.get('http://pokeapi.co/api/v2/pokemon').then( response => response.data.results );
    
    return {
        type: GET_POKE,
        payload: pokeData
    }
}

export default function reducer(state = initialState, action) {
    switch ( action.type ) {
        case GET_POKE + '_FULFILLED':
            return Object.assign({}, state, {
                pokemon: action.payload
            });
        default: 
            return state;
    }
}