import { createReducer, on } from "@ngrx/store";
import { MemeApiActions } from "./meme.actions";
import { Meme } from "../meme/meme.model";

export const initialState: ReadonlyArray<Meme> = [];

export const memeReducer = createReducer(
  initialState,
  on(MemeApiActions.retrievedMeme, (state, { meme }) => [meme, ...state])
);
