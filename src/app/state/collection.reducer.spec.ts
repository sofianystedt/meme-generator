import * as fromReducer from "./collection.reducer";
import { MemeActions } from "./meme.actions";

describe("CollectionReducer", () => {
  describe("unknown action", () => {
    it("should return the previous state", () => {
      const { initialState } = fromReducer;
      const action = {
        type: "Unknown",
      };
      const state = fromReducer.collectionReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe("like action", () => {
    test("should add a meme and update the state in an immutable way", () => {
      const initialState: Array<number> = [1, 2];

      const action = MemeActions.likeMeme({ memeId: 3 });
      const state = fromReducer.collectionReducer(initialState, action);

      expect(state[2]).toBe(3);
    });

    test("should not add a memeId to collection when that memeId is already in the collection", () => {
      const initialState: Array<number> = [1, 2];

      const action = MemeActions.likeMeme({ memeId: 2 });
      const state = fromReducer.collectionReducer(initialState, action);

      expect(state[2]).toBeUndefined();
      expect(state[1]).toBe(2);
    });
  });

  describe("remove action", () => {
    it("should remove the selected book from the collection update the state in an immutable way", () => {
      const initialState: Array<number> = [1, 2];
      const action = MemeActions.removeMeme({ memeId: 2 });
      const state = fromReducer.collectionReducer(initialState, action);

      expect(state[1]).toBeUndefined();
    });
  });
});
