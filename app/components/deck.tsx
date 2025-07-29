import { Container } from "@pixi/react";
import { iDeck } from "~/interfaces/game";
import Card from "./card";

export default function Deck({ coords, id, cards }: iDeck) {
  return (
    <Container x={coords.x} y={coords.y}>
      {cards.map((card, index) => (
        <Card
        key={index}
          coords={card.coords}
          type={card.type}
          color={card.color}
          isFlipped={card.isFlipped}
        />
      ))}
    </Container>
  );
}
