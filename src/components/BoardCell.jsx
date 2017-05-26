import React from 'react';
import { mapToFriendly } from '../chess/pieces';

const style = {
    width: '50px',
    height: '50px',
    backgroundColor: 'white',
    border: 'solid 1px black',
    display: 'inline-block'
};

function friendlyStr(chessPiece: ChessPiece): string {
    const piece = mapToFriendly(chessPiece);
    const { colour, type } = piece;
    return `${colour}, ${type}`;
}

function BoardCell(props) {
    const { contains } = props;
    // const { colour, type } = contains;

    return (
        <div className="BoardCell" style={style}>
            {contains ? friendlyStr(contains) : null}
        </div>
    );
}

export default BoardCell;