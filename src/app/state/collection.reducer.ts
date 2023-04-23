import { createReducer, on } from "@ngrx/store";
import { MemeActions } from "./meme.actions";

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(MemeActions.removeMeme, (state, { memeId }) =>
    state.filter((id) => id !== memeId)
  ),
  on(MemeActions.likeMeme, (state, { memeId }) => {
    if (state.indexOf(memeId) > -1) return state;

    return [...state, memeId];
  })
);
