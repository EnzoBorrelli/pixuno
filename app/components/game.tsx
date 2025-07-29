import { Stage, TilingSprite } from "@pixi/react";
import Deck from "./deck";
import { CardDeckExample, RivalCardDeckExample } from "~/utils/cardDeckExample";
import DiscardDeck from "./discardDeck";
import PickupDeck from "./pickupDeck";
import { useSelector } from "react-redux";
import { RootState } from "~/store";

export default function Game() {
  const player = useSelector((state: RootState) => state.player);
  const aiLeft = useSelector((state: RootState) => state.aiLeft);
  const aiUp = useSelector((state: RootState) => state.aiUp);
  const aiRight = useSelector((state: RootState) => state.aiRight);
  const discard = useSelector((state: RootState) => state.discard);
  const pickup = useSelector((state: RootState) => state.pickup);
  return (
    <Stage
      width={800}
      height={600}
      options={{
        backgroundColor: 0xa65232,
        antialias: false,
        autoDensity: true,
      }}
    >
      <TilingSprite
        tilePosition={{ x: 0, y: 0 }}
        image="/assets/images/wood-dark.png"
        width={800}
        height={600}
        alpha={0.6}
        
      />
      <Deck position={player.position} id={player.id} cards={CardDeckExample} />
      <Deck
        position={aiLeft.position}
        id={aiLeft.id}
        cards={RivalCardDeckExample}
        angle={aiLeft.angle}
      />
      <Deck
        position={aiUp.position}
        id={aiUp.id}
        cards={RivalCardDeckExample}
        angle={aiUp.angle}
      />
      <Deck
        position={aiRight.position}
        id={aiRight.id}
        cards={RivalCardDeckExample}
        angle={aiRight.angle}
      />
      <DiscardDeck
        position={discard.position}
        id={discard.id}
        cards={CardDeckExample}
      />
      <PickupDeck
        position={pickup.position}
        id={pickup.id}
        cards={RivalCardDeckExample}
      />
    </Stage>
  );
}
