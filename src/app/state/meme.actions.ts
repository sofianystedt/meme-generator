import { createActionGroup, props } from "@ngrx/store";
import { Meme } from "../meme/meme.model";

export const MemeActions = createActionGroup({
  source: "Meme",
  events: {
    "Like Meme": props<{ memeId: number }>(),
    "Remove Meme": props<{ memeId: number }>(),
  },
});

export const MemeApiActions = createActionGroup({
  source: "Meme API",
  events: {
    "Fetch Meme": props<{ ids: ReadonlyArray<Meme["id"]> }>(),
    "Retrieved Meme": props<{ meme: Readonly<Meme> }>(),
  },
});
