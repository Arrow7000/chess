// white always at bottom


const sideLength = 8;

// export function getMoves(pieceType, colour, [rowIndex, colIndex]) {

// }





// function getPawnMoves(colour, [rowIndex, colIndex]) {

// }

function getMapFunc(direction: Directions, fromSquare: Square) {
    const [rowIndex, colIndex] = fromSquare;

    return function (_: any, i: number): Square {

        switch (direction) {
            case Directions.UpLeft:
                return [rowIndex - i, colIndex - i];

            case Directions.UpRight:
                return [rowIndex - i, colIndex + i];

            case Directions.DownLeft:
                return [rowIndex + i, colIndex - i];

            case Directions.DownRight:
                return [rowIndex + i, colIndex + i];

            case Directions.Up:
                return [rowIndex - i, colIndex];

            case Directions.Right:
                return [rowIndex, colIndex + i];

            case Directions.Down:
                return [rowIndex + i, colIndex];

            case Directions.Left:
                return [rowIndex, colIndex - i];


            default:
                throw new Error('Received invalid direction')
        }
    }

}



function moveLine(fromSquare: Square, direction: Directions): Square[] {
    const mapFunc = getMapFunc(direction, fromSquare);
    return newAr(sideLength).map(mapFunc);
}

// export function diagonals(fromSquare: Square): Square[] {

//     const [rowIndex, colIndex] = fromSquare;

//     const upLeft = <Square[]>newAr(sideLength).map((_, i) => {
//         return [rowIndex - i, colIndex - i];
//     });
//     const upRight = <Square[]>newAr(sideLength).map((_, i) => {
//         return [rowIndex - i, colIndex + i];
//     });
//     const downLeft = <Square[]>newAr(sideLength).map((_, i) => {
//         return [rowIndex + i, colIndex - i];
//     });
//     const downRight = <Square[]>newAr(sideLength).map((_, i) => {
//         return [rowIndex + i, colIndex + i];
//     });

//     return [...upLeft, ...upRight, ...downLeft, ...downRight];

//     // return list of coordinates: [[1,2], [3,4], ...]
// }

// function straights(fromSquare: Square): Square[] {
//     const [rowIndex, colIndex] = fromSquare;

//     const up = <Square[]>newAr(sideLength).map((_, i) => {
//         return [rowIndex - i, colIndex];
//     });
//     const right = <Square[]>newAr(sideLength).map((_, i) => {
//         return [rowIndex, colIndex + i];
//     });
//     const down = <Square[]>newAr(sideLength).map((_, i) => {
//         return [rowIndex + i, colIndex];
//     });
//     const left = <Square[]>newAr(sideLength).map((_, i) => {
//         return [rowIndex, colIndex - i];
//     });

//     return [...up, ...right, ...down, ...left];
// }

function isOnPath(pathSqs: Square[], pieceSq: Square[]) {

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
