import find from 'lodash/find';
// white always at bottom

const sideLength = 8;

// const Directions = Directions;
const diagonals = [Directions.UpLeft, Directions.UpRight, Directions.DownRight, Directions.DownLeft];
const straights = [Directions.Up, Directions.Right, Directions.Down, Directions.Left];

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

function limitLine(moveSquares: Square[], length: number) {
    return moveSquares.slice(0, length);
}


function nameToSquare(sqName: string): Square {
    const letter = name[0];
    const number = name[1];

    const colIndex = 'abcdefgh'.indexOf(letter);
    const rowIndex = '12345678'.indexOf(number);

    return [colIndex, rowIndex];
}

function whatsOnSquare(board: Board, fromSquare: Square, direction: Directions, distance: number): ChessPiece | null {
    const [colIndex, rowIndex] = fromSquare;

    const line = squaresLine(fromSquare, direction);
    const targetSq = line[distance];

    const [targetColI, targetRowI] = targetSq;

    return board[targetColI][targetRowI];
}


/**
 * @TODO:
 *  - Ensure get the order of king/queen right, depending on square colour
 */

const King = Pieces.King;
const Queen = Pieces.Queen;
const Rook = Pieces.Rook;
const Bishop = Pieces.Bishop;
const Knight = Pieces.Knight;
const Pawn = Pieces.Pawn;

export function newBoard(): Board {
    const mains = [Rook, Knight, Bishop, King, Queen, Bishop, Knight, Rook];
    const pawns = range(sideLength).map(() => Pawn);

    const blackMain: BoardRow = mains.map(piece => ({
        type: piece,
        colour: Colours.Black
    }));
    const blackPawns: BoardRow = pawns.map(piece => ({
        type: piece,
        colour: Colours.Black
    }));

    const whiteMain: BoardRow = mains.map(piece => ({
        type: piece,
        colour: Colours.White
    }));
    const whitePawns: BoardRow = pawns.map(piece => ({
        type: piece,
        colour: Colours.White
    }));

    const middleRows: BoardRow[] = range(sideLength - 4).map(() => {
        return range(sideLength).map(() => null);
    });

    const board = [
        blackMain,
        blackPawns,
        ...middleRows,
        whitePawns,
        whiteMain
    ];

    return board;
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
