import React from 'react';

const style = {
    width: '20px',
    height: '20px',
    backgroundColor: 'white',
    border: 'solid 1px black',
    display: 'inline-block'
};

function BoardCell(props) {
    const { contains } = props;
    // const { colour, type } = contains;

    return (
        <div className="BoardCell" style={style}>
            {contains ? `${contains.colour}, ${contains.type}` : null}
        </div>
    );
}

export default BoardCell;