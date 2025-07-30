import { Stage, TilingSprite } from "@pixi/react";
import Deck from "./deck";
import DiscardDeck from "./discardDeck";
import PickupDeck from "./pickupDeck";
import { useSelector } from "react-redux";
import { RootState } from "~/store";
import { createDeck } from "~/scripts/decks/createDeck";
import { shuffleDeck } from "~/scripts/decks/shuffleDeck";
import { dealCards } from "~/scripts/decks/dealCards";
import { manageGameState, PreLoadSounds } from "~/scripts/game/gameUtils";

export default function Game() {
  //selectors
  const player = useSelector((state: RootState) => state.player);
  const aiLeft = useSelector((state: RootState) => state.aiLeft);
  const aiUp = useSelector((state: RootState) => state.aiUp);
  const aiRight = useSelector((state: RootState) => state.aiRight);
  const discard = useSelector((state: RootState) => state.discard);
  const pickup = useSelector((state: RootState) => state.pickup);
  const game = useSelector((state: RootState) => state.game);

  //scripts

  PreLoadSounds();
  manageGameState(game.state);

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
      <Deck position={player.position} id={player.id} cards={player.cards} />
      <Deck
        position={aiLeft.position}
        id={aiLeft.id}
        cards={aiLeft.cards}
        angle={aiLeft.angle}
      />
      <Deck
        position={aiUp.position}
        id={aiUp.id}
        cards={aiUp.cards}
        angle={aiUp.angle}
      />
      <Deck
        position={aiRight.position}
        id={aiRight.id}
        cards={aiRight.cards}
        angle={aiRight.angle}
      />
      <DiscardDeck
        position={discard.position}
        id={discard.id}
        cards={discard.cards}
      />
      <PickupDeck
        position={pickup.position}
        id={pickup.id}
        cards={pickup.cards}
      />
    </Stage>
  );
}
