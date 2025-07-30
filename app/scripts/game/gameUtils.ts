import { Dispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GAME_STATES } from "~/enums/game";
import soundPlayer from "~/utils/soundPlayer";
import { createDeck } from "../decks/createDeck";
import { dealCards } from "../decks/dealCards";
import { shuffleDeck } from "../decks/shuffleDeck";
import {
  aiLeftActions,
  aiRightActions,
  aiUpActions,
  discardActions,
  pickupActions,
  playerActions,
} from "~/store/deckSlices";
import { gameActions } from "~/store/gameSlice";

export function PreLoadSounds() {
  useEffect(() => {
    soundPlayer.PreloadSound({ folder: "cards", audio: "pick" });
    soundPlayer.PreloadSound({ folder: "ui", audio: "bg_music" });
  }, []);
}

function shuffleInitialDeck(dispatch: Dispatch) {
  const deck = shuffleDeck(createDeck());
  const { hands, drawPile, discardPile } = dealCards(deck, 4);

  for (const card of hands[0]) {
    dispatch(playerActions.addCard(card));
  }
  dispatch(aiLeftActions.setDeck(hands[1]));
  dispatch(aiUpActions.setDeck(hands[2]));
  dispatch(aiRightActions.setDeck(hands[3]));
  dispatch(discardActions.addCard(discardPile));
  dispatch(pickupActions.setDeck(drawPile));
  dispatch(gameActions.setState(GAME_STATES.PLAYING));
}

function playGame(dispatch: Dispatch) {
  soundPlayer.PlaySound({
    folder: "ui",
    audio: "bg_music",
    volume: 0.2,
    useCache: true,
    loop: true,
  });
}
function gameOver(dispatch: Dispatch) {}

export function manageGameState(gameState: GAME_STATES) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (gameState === GAME_STATES.INITIAL_SHUFFLE) shuffleInitialDeck(dispatch);
    if (gameState === GAME_STATES.PLAYING) playGame(dispatch);
    if (gameState === GAME_STATES.GAME_OVER) gameOver(dispatch);
  }, [gameState, dispatch]);
}
