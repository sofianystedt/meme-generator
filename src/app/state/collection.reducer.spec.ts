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
      const initialState: Array<string> = ["firstId", "secondId"];

      const action = MemeActions.likeMeme({ memeId: "thirdId" });
      const state = fromReducer.collectionReducer(initialState, action);

      expect(state[2]).toBe("thirdId");
    });

    test("should not add a memeId to collection when that memeId is already in the collection", () => {
      const initialState: Array<string> = ["firstId", "secondId"];

      const action = MemeActions.likeMeme({ memeId: "secondId" });
      const state = fromReducer.collectionReducer(initialState, action);

      expect(state[2]).toBeUndefined();
      expect(state[1]).toBe("secondId");
    });
  });

  describe("remove action", () => {
    it("should remove the selected book from the collection update the state in an immutable way", () => {
      const initialState: Array<string> = ["firstId", "secondId"];
      const action = MemeActions.removeMeme({ memeId: "secondId" });
      const state = fromReducer.collectionReducer(initialState, action);

      expect(state[1]).toBeUndefined();
    });
  });
});
