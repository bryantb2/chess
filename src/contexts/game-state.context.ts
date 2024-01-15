import { createContext } from "react";
import { GameState } from "../models/game-state.model";
import { generateNewGameBoard } from "../utilities/generate-board.util";

export const INITIAL_GAME_STATE: GameState = generateNewGameBoard();

export const GameStateContext = createContext<GameState>(INITIAL_GAME_STATE);