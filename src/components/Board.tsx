import React from 'react';
import BoardCell from './BoardCell';

const rowStyle = {

};

function Board(props) {
    const { newGame, board } = props;

    return (<div>
        <h1>This is a board!</h1>
        <button onClick={newGame}>New game</button>
        {board.map((row, i) => {
            return (<div style={rowStyle} key={i}>
                {
                    row.map((cell, i) => {
                        return (<BoardCell key={i} contains={cell} />)
                    })
                }
            </div>);
        })}
    </div>);
}

export default Board;