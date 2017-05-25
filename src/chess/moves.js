// white always at bottom


const sideLength = 8;

// export function getMoves(pieceType, colour, [rowIndex, colIndex]) {

// }





// function getPawnMoves(colour, [rowIndex, colIndex]) {

// }

function diagonals([rowIndex, colIndex]) {

    const upLeft = newAr(sideLength).map((_, i) => {
        return [rowIndex - i, colIndex - i];
    });
    const upRight = newAr(sideLength).map((_, i) => {
        return [rowIndex - i, colIndex + i];
    });
    const downLeft = newAr(sideLength).map((_, i) => {
        return [rowIndex + i, colIndex - i];
    });
    const downRight = newAr(sideLength).map((_, i) => {
        return [rowIndex + i, colIndex + i];
    });

    return [...upLeft, ...upRight, ...downLeft, ...downRight];

    // return list of coordinates: [[1,2], [3,4], ...]
}

function straights([rowIndex, colIndex]) {
    const up = newAr(sideLength).map((_, i) => {
        return [rowIndex - i, colIndex];
    });
    const right = newAr(sideLength).map((_, i) => {
        return [rowIndex, colIndex + i];
    });
    const down = newAr(sideLength).map((_, i) => {
        return [rowIndex + i, colIndex];
    });
    const left = newAr(sideLength).map((_, i) => {
        return [rowIndex, colIndex - i];
    });

    return [...up, ...right, ...down, ...left];
}

function isOnPath(pathSqs, pieceSq) {

}

// only for non-knights
function truncateMoves(originSq, targetSq, pathSqs) {

}




function newAr(len) {
    return new Array(len).fill(null);
}

/**
 * Rules to codify:
 *  - All:
 *      - If under check, can't move unless protecting the king
 *      - Cannot move if will expose king
 *      - if is unlimited mover, move untill blocked by self or enemy - self blocks till square before, enemy blocks square itself
 *  - Pawn:
 *      - move one, only forward
 *      - if enemy diagonally forward, can go there
 *      - en passant
 *  - Rook:
 *      - Move straight
 *  - Knight:
 *      - fixed mover, jumps over any piece
 *      - moves in L shape (3x, 1y)
 *  - Bishop
 *      - Moves diagonally
 *  - Queen:
 *      - Moves straight and diagonally
 *  - King:
 *      - Moves all directions but only one
 *      - cannot move into threat
 *      - Castling
 */
