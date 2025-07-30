import { createSlice } from "@reduxjs/toolkit";
import { iCard, iDeck } from "~/interfaces/game";

const createDeckSlice = (
  name: string,
  position: { x: number; y: number },
  angle: number
) => {
  const initialState: iDeck = {
    position: position,
    id: name,
    cards: [],
    angle: angle,
  };
  return createSlice({
    name: name,
    initialState,
    reducers: {
      addCard: (state, action) => {
        const card: iCard = action.payload;
        state.cards.push(card);
      },
      removeCard: (state, action) => {
        const index = state.cards.findIndex(
          (card) => card.id === action.payload.id
        );
        if (index !== -1) {
          state.cards.splice(index, 1);
        }
      },
      moveCard: (state, action) => {
        const { index, newCoords } = action.payload;
        if (state.cards[index]) {
          state.cards[index].coords = newCoords;
        }
      },
      setDeck: (state, action) => {
        state.cards = action.payload;
      },
      clearDeck: (state) => {
        state.cards = [];
      },
    },
  });
};

export default createDeckSlice;
