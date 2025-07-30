import { DECK_ANGLE, DECK_POSITION } from "~/enums/decks";
import createDeckSlice from "./deckSliceFactory";

const playerHandSlice = createDeckSlice(
  "player",
  DECK_POSITION.PLAYER,
  DECK_ANGLE.PLAYER
);
const aiLeftHandSlice = createDeckSlice(
  "aiLeft",
  DECK_POSITION.AI_LEFT,
  DECK_ANGLE.AI_LEFT
);
const aiUpHandSlice = createDeckSlice(
  "aiUp",
  DECK_POSITION.AI_UP,
  DECK_ANGLE.AI_UP
);
const aiRightHandSlice = createDeckSlice(
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

export const playerActions = playerHandSlice.actions;
export const aiLeftActions = aiLeftHandSlice.actions;
export const aiUpActions = aiUpHandSlice.actions;
export const aiRightActions = aiRightHandSlice.actions;
export const discardActions = discardDeckSlice.actions;
export const pickupActions = pickupDeckSlice.actions;

//reducers

export const playerReducer = playerHandSlice.reducer;
export const aiLeftReducer = aiLeftHandSlice.reducer;
export const aiUpReducer = aiUpHandSlice.reducer;
export const aiRightReducer = aiRightHandSlice.reducer;
export const discardReducer = discardDeckSlice.reducer;
export const pickupReducer = pickupDeckSlice.reducer;
