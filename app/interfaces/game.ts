import { CARD_TYPE, CARD_COLOR } from "../enums/cards";

export type Coords = { x: number; y: number };

export interface iCard {
  id: string;
  coords?: Coords;
  type: CARD_TYPE;
  color: CARD_COLOR;
  isFlipped: boolean;
  angle?:number
}

export interface iDeck {
  position: Coords;
  id: string;
  cards: iCard[];
  angle?:number
}
