import { NEW_GAME } from './actions/constants';

const initialState = {
    board: createBoard()
}

function reducer(state = initialState, action) {

    switch (action.type) {
        case NEW_GAME:

            return {...state, board: createBoard() };

        default:
            return state;
    }

}

export default reducer;





function createRow() {
    return new Array(8).fill(null);
}

function createBoard() {
    return new Array(8).fill(createRow());
}

function makePiece(pieceConst, colour) {
    return {
        type: pieceConst,
        colour
    };
}