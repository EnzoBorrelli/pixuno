export enum GAME_STATES {
  INITIAL_SHUFFLE = "intial shuffle",
  PLAYING = "playing",
  GAME_OVER = "game over",
}

export enum GAME_TURNS {
  PLAYER_TURN = "player turn",
  AI_LEFT_TURN = "AI Left turn",
  AI_UP_TURN = "AI Up turn",
  AI_RIGHT_TURN = "AI Right turn",
}

export const CurrentTurn: GAME_TURNS[] = [
  GAME_TURNS.PLAYER_TURN,
  GAME_TURNS.AI_LEFT_TURN,
  GAME_TURNS.AI_UP_TURN,
  GAME_TURNS.AI_RIGHT_TURN,
];

export enum GAME_FLOW {
  CLOCKWISE = "clockwise",
  COUNTER_CLOCKWISE = "counterclockwise",
}
