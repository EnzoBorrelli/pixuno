import { Container, Graphics } from "@pixi/react";
import { iDeck } from "~/interfaces/game";
import Card from "./card";

export default function Deck({ coords, id, cards, angle }: iDeck) {
  const CARD_WIDTH = 64;
  const DECK_WIDTH = 400;
  const cardCount = cards.length;

  //dinamic spacing
  const idealSpacing = 40;
  const maxSpacing = (DECK_WIDTH - CARD_WIDTH) / (cardCount - 1 || 1);
  const spacing = Math.min(idealSpacing, maxSpacing);

  //total width of cards spread
  const spreadWidth = (cardCount - 1) * spacing + CARD_WIDTH;

  //starting x to center the deck
  const cardOrigin = (DECK_WIDTH - spreadWidth) / 2;

  return (
    <Container x={coords.x} y={coords.y} angle={angle} interactive={true}>
      <Graphics
        draw={(g) => {
          g.clear();
          g.beginFill(0xff0000, 0.3); // Red with some transparency
          g.drawRect(0, 0, 400, 100);
          g.endFill();
        }}
        x={0}
        y={0}
      />
      {cards.map((card, index) => (
        <Card
          key={index}
          coords={{ x: cardOrigin + index * spacing, y: 0 }}
          type={card.type}
          color={card.color}
          isFlipped={card.isFlipped}
        />
      ))}
    </Container>
  );
}
