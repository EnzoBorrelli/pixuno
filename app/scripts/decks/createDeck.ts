import { CARD_COLOR, CARD_TYPE } from "~/enums/cards";
import { iCard } from "~/interfaces/game";
import { v4 as uuidv4 } from "uuid";

const cardColors = [
  CARD_COLOR.BLUE,
  CARD_COLOR.GREEN,
  CARD_COLOR.RED,
  CARD_COLOR.YELLOW,
];

const cardTypes = [
  CARD_TYPE.BLOCK,
  CARD_TYPE.CERO,
  CARD_TYPE.UNO,
  CARD_TYPE.DOS,
  CARD_TYPE.TRES,
  CARD_TYPE.CUATRO,
  CARD_TYPE.CINCO,
  CARD_TYPE.SEIS,
  CARD_TYPE.SIETE,
  CARD_TYPE.OCHO,
  CARD_TYPE.NUEVE,
  CARD_TYPE.PLUS_TWO,
  CARD_TYPE.REVERSE,
];

export function createDeck(): iCard[] {
  const deck: iCard[] = [];

  for (const color of cardColors) {
    deck.push({
      id: uuidv4(),
      type: CARD_TYPE.CERO,
      color,
      isFlipped: true,
    });

    for (let i = 0; i < 2; i++) {
      for (const type of cardTypes.slice(1)) {
        deck.push({
          id: uuidv4(),
          type,
          color,
          isFlipped: true,
        });
      }
    }
  }
  //wildcards
  for (let i = 0; i < 4; i++) {
    deck.push({
      id: uuidv4(),
      type: CARD_TYPE.MULTICOLOR,
      color: CARD_COLOR.BASE,
      isFlipped: true,
    });
    deck.push({
      id: uuidv4(),
      type: CARD_TYPE.PLUS_FOUR,
      color: CARD_COLOR.BASE,
      isFlipped: true,
    });
  }
  return deck;
}
