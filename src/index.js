import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import PizzaContainer from './components/PizzaContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <h1> CAKE REDUCER </h1>
        <CakeContainer />
        <HooksCakeContainer />
        <br />
        <br />
        <hr />
        <hr />
        <h1> ICE CREAM REDUCER </h1>

        <IceCreamContainer />
        <br />
        <br />
        <hr />
        <hr />
        <h1> PIZZA REDUCER </h1>

        <PizzaContainer />
        <br />
        <br />
        <hr />
        <hr />
        <h1> NEW CAKE CONTAINER USING PAYLOAD </h1>

        <NewCakeContainer />
        <br />
        <br />
        <hr />
        <hr />
        <ItemContainer cake />
        <ItemContainer />
        <br />
        <br />
        <hr />
        <hr />
        <UserContainer />
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
