import { Sprite } from "@pixi/react";
import animateCard from "~/animations/animateCard";
import { CARD_COLOR, CARD_TYPE } from "~/enums/cards";
import { iCard } from "~/interfaces/game";

interface iCard_DeckID extends iCard {
  deckID: string;
}

export default function Card({
  coords = { x: 0, y: 0 },
  type = CARD_TYPE.UNO,
  color = CARD_COLOR.RED,
  isFlipped,
  angle = 0,
  deckID,
}: iCard_DeckID) {
  const { texture, spriteRef } = animateCard.Flip(type, color, isFlipped);
  const { setHover, hoverY } = animateCard.Hover();
  const isInteractive =
    deckID === "player" || deckID === "pickup" ? true : false;
  return (
    <Sprite
      ref={spriteRef}
      texture={texture}
      x={coords.x + 32}
      y={coords.y + 50 + hoverY}
      width={64}
      height={100}
      angle={angle}
      scale={{ x: 1, y: 1 }}
      anchor={0.5}
      interactive={isInteractive}
      pointerover={() => setHover(true)}
      pointerout={() => setHover(false)}
    />
  );
}
