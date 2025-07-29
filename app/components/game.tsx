import { Stage } from "@pixi/react";
import Deck from "./deck";
import { CardDeckExample, RivalCardDeckExample } from "~/utils/cardDeckExample";
import CentralDeck from "./centralDeck";



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
      <Deck coords={{x:200,y:450}} id="player1" cards={CardDeckExample}/> 
      <Deck coords={{x:150,y:100}} id="player1" cards={RivalCardDeckExample} angle={90}/> 
      <Deck coords={{x:650,y:500}} id="player1" cards={RivalCardDeckExample} angle={270}/> 
      <Deck coords={{x:600,y:150}} id="player1" cards={RivalCardDeckExample} angle={180}/> 
      <CentralDeck coords={{x:340,y:240}} id="player1" cards={CardDeckExample}/> 
    </Stage>
  );
}
