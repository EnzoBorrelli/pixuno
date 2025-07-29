import { Container, Graphics } from "@pixi/react";
import { iDeck } from "~/interfaces/game";
import Card from "./card";

export default function DiscardDeck({ position, cards,id }: iDeck) {
  return (
    <Container x={position.x} y={position.y} width={120} height={120}>
      <Graphics
        draw={(g) => {
          g.clear();
          g.beginFill(0xffcccc, 0.3); // Red with some transparency
          g.drawRect(0, 0, 120, 120);
          g.endFill();
        }}
        x={0}
        y={0}
      />
      {cards.map((card, index) => (
        <Card
          id={card.id}
          key={index}
          coords={{ x: 30, y: 10 }}
          angle={index}
          type={card.type}
          color={card.color}
          isFlipped={card.isFlipped}
          deckID={id}
        />
      ))}
    </Container>
  );
}
