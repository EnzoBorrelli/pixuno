import { GAME_FLOW, GAME_STATES, GAME_TURNS } from "~/enums/game";
import { CARD_TYPE, CARD_COLOR } from "../enums/cards";

export type Coords = { x: number; y: number };

export interface iCard {
  id: string;
  coords?: Coords;
  type: CARD_TYPE;
  color: CARD_COLOR;
  isFlipped: boolean;
  angle?: number;
}

export interface iDeck {
  position: Coords;
  id: string;
  cards: iCard[];
  angle?: number;
}

export interface iGame {
  state: GAME_STATES;
  current_turn: GAME_TURNS;
  flow: GAME_FLOW;
  turn_timer: number;
}
