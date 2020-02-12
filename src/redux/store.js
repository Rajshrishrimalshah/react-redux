import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import logger from 'redux-logger';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

//OPTIONS :--

// const store = createStore(rootReducer, applyMiddleware(logger, thunk))

// const store = createStore(rootReducer, composeWithDevTools(
//   applyMiddleware(logger),
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ));

export default store;
