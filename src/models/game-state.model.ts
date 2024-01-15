export enum Piece {
  Rook = "Rook",
  Knight = "Knight",
  Bishop = "Bishop",
  Queen = "Queen",
  King = "King",
  Pawn = "Pawn",
}

export enum Color {
  Black = "Black",
  White = "White",
}

export type Square = { color: Color | null; piece: Piece | null }

export type GameState = Array<Array<Square>>;

// todo: break this out into separate files :)