import { createStore, compose } from 'redux';
import reducer from './reducer';

interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeCreator = (initialState?: object) => createStore(reducer, initialState, composeEnhancers())

export default storeCreator;
