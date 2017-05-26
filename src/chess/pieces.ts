export const PAWN = 'PAWN';
export const ROOK = 'ROOK';
export const KNIGHT = 'KNIGHT';
export const BISHOP = 'BISHOP';
export const QUEEN = 'QUEEN';
export const KING = 'KING';


export function mapToFriendly(enumPiece: ChessPiece) {
    const { colour, type } = enumPiece;
    let clrFr;
    switch (colour) {
        case Colours.Black:
            clrFr = 'black';
            break;
        case Colours.White:
            clrFr = 'white';
            break;

        default:
            throw new Error('unknown colour');
    }

    switch (type) {
        case Pieces.Pawn:
            return {
                type: 'pawn',
                colour: clrFr
            };

        case Pieces.Rook:
            return {
                type: 'rook',
                colour: clrFr
            };

        case Pieces.Knight:
            return {
                type: 'knight',
                colour: clrFr
            };

        case Pieces.Bishop:
            return {
                type: 'bishop',
                colour: clrFr
            };

        case Pieces.Queen:
            return {
                type: 'queen',
                colour: clrFr
            };

        case Pieces.King:
            return {
                type: 'king',
                colour: clrFr
            };

        default:
            break;
    }
}