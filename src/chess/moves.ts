import find from 'lodash/find';
// white always at bottom

const sideLength = 8;

const Dirs = Directions;
const diagonals = [Dirs.UpLeft, Dirs.UpRight, Dirs.DownRight, Dirs.DownLeft];
const straights = [Dirs.Up, Dirs.Right, Dirs.Down, Dirs.Left];

// function getPawnMoves(colour, [rowIndex, colIndex]) {

// }

function getMapFunc(direction: Directions, fromSquare: Square) {
    const [rowIndex, colIndex] = fromSquare;

    return function mapFunc(_: any, i: number): Square {

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



function squaresLine(fromSquare: Square, direction: Directions): Square[] {
    const mapFunc = getMapFunc(direction, fromSquare);
    return range(sideLength).map(mapFunc);
}

function lineIntersects(line: Square[], square: Square): [Square, number] {

    let matchingIndex;
    const match = find(line, (lineSq, i) => {
        const [row, col] = lineSq;
        const matches = row === square[0] && col === square[1];
        if (matches) {
            matchingIndex = i;
        }
        return matches;
    });

    return match ? [match, matchingIndex] : null;
}

function limitMoves(moveSquares: Square[], length: number) {
    return moveSquares.slice(0, length);
}


function nameToSquare(sqName: string): Square {
    const letter = name[0];
    const number = name[1];

    const colIndex = 'abcdefgh'.indexOf(letter);
    const rowIndex = '12345678'.indexOf(number);

    return [colIndex, rowIndex];
}

function isOnPath(pathSqs: Square[], pieceSq: Square[]) {

}

// only for non-knights
function truncateMoves(originSq, targetSq, pathSqs) {

}




function range(len: number) {
    return new Array(len).fill(null).map((_, i) => i);
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
