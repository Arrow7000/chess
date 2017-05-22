import React, { Component } from 'react';
import { Provider } from 'react-redux';
import storeCreator from '../store';
import BoardContainer from './BoardContainer';

const store = storeCreator();

class Chess extends Component {
    render() {
        return (
            <Provider store={store}>
                <BoardContainer />
            </Provider>
        );
    }
}

export default Chess;