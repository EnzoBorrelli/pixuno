import { Container, Graphics } from "@pixi/react";
import { iDeck } from "~/interfaces/game";
import Card from "./card";

export default function CentralDeck({ coords,cards }: iDeck) {

  return (
    <Container x={coords.x} y={coords.y} width={120} height={120}>
      {cards.map((card, index) => (
          <Card
          key={index}
          coords={{ x: 30, y: 10 }}
          angle={index}
          type={card.type}
          color={card.color}
          isFlipped={card.isFlipped}
          />
        ))}
        <Graphics
          draw={(g) => {
            g.clear();
            g.beginFill(0xffcc00, 0.3); // Red with some transparency
            g.drawRect(0, 0, 120, 120);
            g.endFill();
          }}
          x={0}
          y={0}
        />
    </Container>
  );
}
