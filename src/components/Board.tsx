import React from 'react';

function Board(props) {
    const { newGame } = props;

    return (<div>
        <h1>This is a board!</h1>
        <button onClick={newGame}>New game</button>
    </div>);
}

export default Board;