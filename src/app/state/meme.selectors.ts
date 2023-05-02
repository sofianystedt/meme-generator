import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Meme } from "../meme/meme.model";

export const selectMeme = createFeatureSelector<ReadonlyArray<Meme>>("meme");

export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<number>>("collection");

export const selectMemeCollection = createSelector(
  selectMeme,
  selectCollectionState,
  (meme, collection) => {
    return collection.map((id) => meme.find((meme) => meme.id === id)!);
  }
);
