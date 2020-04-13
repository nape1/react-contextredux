import React, { Component } from 'react';
import { render } from 'react-dom';
import {createStore} from 'redux';

//STORE -> GLOBALIZED STATE


//ACTION
const increment = () => {
  return{
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return{
    type:'DECREMENT'
  }
}


//REDUCER
const counter = (state= 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
      case 'DECREMENT':
      return state - 1
  }
}

let store = createStore(counter)

// DISPLAY
store.subscribe(() => console.log(store.getState()))



//DISPATCH

store.dispatch(increment());


class App extends Component {
  render() {
    return (
      <div>sdsdsd</div>
    );
  }
}

render(<App />, document.getElementById('root'));
