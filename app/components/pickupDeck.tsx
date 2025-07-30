import { Container, Graphics } from "@pixi/react";
import { iDeck } from "~/interfaces/game";
import Card from "./card";

export default function PickupDeck({ position, cards, id }: iDeck) {
  const maxSpread = 10;
  const halfSpread = maxSpread / 2;
  return (
    <Container x={position.x} y={position.y} width={120} height={120}>
      <Graphics
        draw={(g) => {
          g.clear();
          g.beginFill(0xaaccff, 0.3); // Red with some transparency
          g.drawRect(0, 0, 120, 120);
          g.endFill();
        }}
        x={0}
        y={0}
      />
      {cards.map((card, index) => {
        const t = cards.length > 1 ? index / (cards.length - 1) : 0.5;
        const angle = t * maxSpread - halfSpread;
        return (
          <Card
            id={card.id}
            key={card.id}
            coords={{ x: 30, y: 10 }}
            angle={angle}
            type={card.type}
            color={card.color}
            isFlipped={card.isFlipped}
            deckID={index + 1 === cards.length ? id : ""}
          />
        );
      })}
    </Container>
  );
}
