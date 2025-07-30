import { CARD_TYPE } from "~/enums/cards";
import { iCard } from "~/interfaces/game";

export function dealCards(deck: iCard[], players: number) {
  const hands: iCard[][] = Array.from({ length: players }, () => []);
  const copiedDeck = [...deck];

  for (let i = 0; i < 7; i++) {
    for (let p = 0; p < players; p++) {
      const card = copiedDeck.pop();
      if (card) hands[p].push(card);
    }
  }

  //discard pile card

  let firstCard: iCard | undefined;
  while (copiedDeck.length && !firstCard) {
    const card = copiedDeck.pop()!;
    if (
      card.type !== CARD_TYPE.PLUS_FOUR &&
      card.type !== CARD_TYPE.MULTICOLOR
    ) {
      firstCard = card;
    } else {
      copiedDeck.unshift(card);
    }
  }
  return {
    hands,
    drawPile: copiedDeck,
    discardPile: firstCard ? [firstCard] : [],
  };
}
