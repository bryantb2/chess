import { Color } from "../models/game-state.model";
import { BOARD_HEIGHT } from "./dimensions.constants";

export const PAWN_STARTING_RANKS = <Array<[Color, number]>>[
  [Color.Black, 1],
  [Color.White, BOARD_HEIGHT - 2],
];

export const MAIN_PIECE_STARTING_RANKS = <Array<[Color, number]>>[
  [Color.Black, 0],
  [Color.White, BOARD_HEIGHT - 1],
];
