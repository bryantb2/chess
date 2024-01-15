import { BOARD_HEIGHT, BOARD_WIDTH } from "../constants/dimensions.constants";
import {
  MAIN_PIECE_STARTING_RANKS,
  PAWN_STARTING_RANKS,
} from "../constants/positions.constants";
import { GameState, Piece, Square } from "../models/game-state.model";

const PIECE_ORDER: Array<Piece> = [
  Piece.Rook,
  Piece.Knight,
  Piece.Bishop,
  Piece.Queen,
  Piece.King,
  Piece.Bishop,
  Piece.Knight,
  Piece.Rook,
];

/**
 * Generates a standard 8x8 chess grid with black / white
 * pieces at the standard starting points
 *
 * @returns New game board
 */
export const generateNewGameBoard = () => {
  const board: GameState = new Array(BOARD_WIDTH).map(() => {
    return new Array(BOARD_HEIGHT).map(
      () => <Square>{ color: null, piece: null }
    );
  });

  // setup initial pawns
  PAWN_STARTING_RANKS.forEach(([color, pawnRankIndex]) => {
    board[pawnRankIndex] = board[pawnRankIndex].map(() => ({
      piece: Piece.Pawn,
      color,
    }));
  });

  // setup backrank pieces
  MAIN_PIECE_STARTING_RANKS.forEach(([color, pieceRankIndex]) => {
    board[pieceRankIndex] = board[pieceRankIndex].map(() => ({
      color,
      piece: PIECE_ORDER[pieceRankIndex],
    }));
  });

  return board;
};
