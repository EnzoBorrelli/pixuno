import { createSlice } from "@reduxjs/toolkit";
import { CurrentTurn, GAME_FLOW, GAME_STATES } from "~/enums/game";
import { iGame } from "~/interfaces/game";

const initialState: iGame = {
  state: GAME_STATES.INITIAL_SHUFFLE,
  current_turn: CurrentTurn[Math.floor(Math.random() * CurrentTurn.length)],
  flow: GAME_FLOW.CLOCKWISE,
  turn_timer: 10000,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setState: (state, action) => {
      state.state = action.payload;
    },
    setCurrentTurn: (state, action) => {
      state.current_turn = action.payload;
    },
    switchGameFlow: (state) => {
      state.flow =
        state.flow === GAME_FLOW.CLOCKWISE
          ? GAME_FLOW.COUNTER_CLOCKWISE
          : GAME_FLOW.CLOCKWISE;
    },
    setTurnTimer: (state, action) => {
      state.turn_timer = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
