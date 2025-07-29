import { Sprite } from "@pixi/react";
import animateCard from "~/animations/animateCard";
import { CARD_COLOR, CARD_TYPE } from "~/enums/cards";
import { iCard } from "~/interfaces/game";

export default function Card({
  coords,
  type = CARD_TYPE.UNO,
  color = CARD_COLOR.RED,
  isFlipped,
  angle = 0,
}: iCard) {
  const { texture, spriteRef } = animateCard.Flip(type, color, isFlipped);
  const { setHover, hoverY } = animateCard.Hover();

  return (
    <Sprite
      ref={spriteRef}
      texture={texture}
      x={coords.x}
      y={coords.y + hoverY}
      width={64}
      height={100}
      angle={angle}
      scale={{ x: 1, y: 1 }}
      anchor={0.5}
      interactive={true}
      pointerover={() => setHover(true)}
      pointerout={() => setHover(false)}
    />
  );
}
