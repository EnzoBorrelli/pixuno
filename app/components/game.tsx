import { Stage } from "@pixi/react";
import Deck from "./deck";
import { CARD_COLOR, CARD_TYPE } from "~/enums/cards";

const cards = [
  {
    coords : {x:0,y:0},
    type: CARD_TYPE.BLOCK,
    color: CARD_COLOR.GREEN,
    isFlipped: false,
  },
  {
    coords : {x:20,y:0},
    type: CARD_TYPE.BLOCK,
    color: CARD_COLOR.RED,
    isFlipped: false,
  },
  {
    coords : {x:40,y:0},
    type: CARD_TYPE.BLOCK,
    color: CARD_COLOR.BLUE,
    isFlipped: false,
  },
  {
    coords : {x:60,y:0},
    type: CARD_TYPE.BLOCK,
    color: CARD_COLOR.YELLOW,
    isFlipped: false,
  },
]

export default function Game() {
  return (
    <Stage
      width={800}
      height={600}
      options={{
        backgroundColor: 0xaaaaaa,
        antialias: false,
        autoDensity: true,
      }}
    >
      <Deck coords={{x:100,y:100}} id="si" cards={cards}/> 
    </Stage>
  );
}
