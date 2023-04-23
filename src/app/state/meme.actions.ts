import { createActionGroup, props } from "@ngrx/store";
import { Meme } from "../meme/meme.model";

export const MemeActions = createActionGroup({
  source: "Meme",
  events: {
    "Like Meme": props<{ memeId: string }>(),
    "Remove Meme": props<{ memeId: string }>(),
  },
});

export const MemeApiActions = createActionGroup({
  source: "Meme API",
  events: {
    "Retrieved Meme": props<{ meme: Readonly<Meme> }>(),
  },
});
