import { combineReducers } from 'redux';

import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './icecream/iceCreamReducer'
import pizzaReducer from './pizza/pizzaReducer'
import userReducer from './user/userReducer'


const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  pizza: pizzaReducer,
  user: userReducer
})

export default rootReducer;