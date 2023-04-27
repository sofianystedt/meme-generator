import * as fromReducer from "./meme.reducer";
import { MemeApiActions } from "./meme.actions";
import { Meme } from "../meme/meme.model";

describe("MemeReducer", () => {
  describe("unknown action", () => {
    test("should return the default state", () => {
      const { initialState } = fromReducer;
      const action = {
        type: "Unknown",
      };
      const state = fromReducer.memeReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe("retrievedMeme action", () => {
    test("should retrieve meme and update the state in an immutable way", () => {
      const { initialState } = fromReducer;
      const newState: Readonly<Meme> = {
        id: "firstMemeId",
        url: "memeUrl",
        title: "memeTitle",
      };
      const action = MemeApiActions.retrievedMeme({ meme: newState });
      const state = fromReducer.memeReducer(initialState, action);

      expect(state).toContain(newState);
      expect(state).not.toBe(initialState);
    });
  });
});
