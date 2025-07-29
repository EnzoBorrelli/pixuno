import { CARD_TYPE, CARD_COLOR } from "~/enums/cards";

export const CardDeckExample = [
  {
    type: CARD_TYPE.OCHO,
    color: CARD_COLOR.GREEN,
    isFlipped: false,
  },
  {
    type: CARD_TYPE.UNO,
    color: CARD_COLOR.RED,
    isFlipped: false,
  },
  {
    type: CARD_TYPE.BLOCK,
    color: CARD_COLOR.BLUE,
    isFlipped: false,
  },
  {
    type: CARD_TYPE.PLUS_TWO,
    color: CARD_COLOR.YELLOW,
    isFlipped: false,
  },
  {
    type: CARD_TYPE.SEIS,
    color: CARD_COLOR.YELLOW,
    isFlipped: false,
  },
  {
    type: CARD_TYPE.MULTICOLOR,
    color: CARD_COLOR.BASE,
    isFlipped: false,
  },
  {
    type: CARD_TYPE.DOS,
    color: CARD_COLOR.YELLOW,
    isFlipped: false,
  },
]
export const RivalCardDeckExample = [
  {
    type: CARD_TYPE.REVERSE,
    color: CARD_COLOR.GREEN,
    isFlipped: true,
  },
  {
    type: CARD_TYPE.REVERSE,
    color: CARD_COLOR.RED,
    isFlipped: true,
  },
  {
    type: CARD_TYPE.REVERSE,
    color: CARD_COLOR.BLUE,
    isFlipped: true,
  },
  {
    type: CARD_TYPE.REVERSE,
    color: CARD_COLOR.YELLOW,
    isFlipped: true,
  },
  {
    type: CARD_TYPE.REVERSE,
    color: CARD_COLOR.YELLOW,
    isFlipped: true,
  },
  {
    type: CARD_TYPE.REVERSE,
    color: CARD_COLOR.YELLOW,
    isFlipped: true,
  },
  {
    type: CARD_TYPE.REVERSE,
    color: CARD_COLOR.YELLOW,
    isFlipped: true,
  },
]