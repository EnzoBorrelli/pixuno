import { configureStore } from "@reduxjs/toolkit";
import {
  aiLeftReducer,
  aiRightReducer,
  aiUpReducer,
  discardReducer,
  pickupReducer,
  playerReducer,
} from "./deckSlices";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    aiLeft: aiLeftReducer,
    aiUp: aiUpReducer,
    aiRight: aiRightReducer,
    discard: discardReducer,
    pickup: pickupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
