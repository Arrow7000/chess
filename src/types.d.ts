declare const enum Colours { White, Black }

declare const enum Pieces {
    Pawn,
    Rook,
    Knight,
    Bishop,
    Queen,
    King
}

declare interface ChessPiece {
    colour: Colours;
    type: Pieces;
}

/**
 * Coordinates that refer to locations within Board
 */
declare type Square = [number, number];
// declare type Squares = Square[];

/**
 * Board cells and their arrays
 */
declare type BoardCell = (ChessPiece | null);
declare type BoardRow = BoardCell[];
declare type Board = BoardRow[];

declare const enum Directions { UpLeft, UpRight, DownLeft, DownRight, Up, Right, Down, Left }