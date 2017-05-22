import { createStore, compose } from 'redux';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeCreator = initialState => createStore(reducer, initialState, composeEnhancers())

export default storeCreator;
