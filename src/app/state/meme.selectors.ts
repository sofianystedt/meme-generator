import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Meme } from "../meme/meme.model";

export const selectMemes = createFeatureSelector<ReadonlyArray<Meme>>("memes");

export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<string>>("collection");

export const selectMemeCollection = createSelector(
  selectMemes,
  selectCollectionState,
  (memes, collection) => {
    return collection.map((id) => memes.find((meme) => meme.id === id)!);
  }
);
