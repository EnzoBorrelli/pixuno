import { DECK_ANGLE, DECK_POSITION } from "~/enums/decks";
import createDeckSlice from "./deckSliceFactory";

const playerDeckSlice = createDeckSlice(
  "player",
  DECK_POSITION.PLAYER,
  DECK_ANGLE.PLAYER
);
const aiLeftDeckSlice = createDeckSlice(
  "aiLeft",
  DECK_POSITION.AI_LEFT,
  DECK_ANGLE.AI_LEFT
);
const aiUpDeckSlice = createDeckSlice(
  "aiUp",
  DECK_POSITION.AI_UP,
  DECK_ANGLE.AI_UP
);
const aiRightDeckSlice = createDeckSlice(
  "aiRight",
  DECK_POSITION.AI_RIGHT,
  DECK_ANGLE.AI_RIGHT
);
const discardDeckSlice = createDeckSlice(
  "discard",
  DECK_POSITION.DISCARD,
  DECK_ANGLE.DISCARD
);
const pickupDeckSlice = createDeckSlice(
  "pickup",
  DECK_POSITION.PICKUP,
  DECK_ANGLE.PICKUP
);

//actions

export const playerActions = playerDeckSlice.actions;
export const aiLeftActions = aiLeftDeckSlice.actions;
export const aiUpActions = aiUpDeckSlice.actions;
export const aiRightActions = aiRightDeckSlice.actions;
export const discardActions = discardDeckSlice.actions;
export const pickupActions = pickupDeckSlice.actions;

//reducers

export const playerReducer = playerDeckSlice.reducer;
export const aiLeftReducer = aiLeftDeckSlice.reducer;
export const aiUpReducer = aiUpDeckSlice.reducer;
export const aiRightReducer = aiRightDeckSlice.reducer;
export const discardReducer = discardDeckSlice.reducer;
export const pickupReducer = pickupDeckSlice.reducer;
