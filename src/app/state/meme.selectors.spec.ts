import { Meme } from "../meme/meme.model";
import { selectMeme, selectMemeCollection } from "./meme.selectors";

describe("Selectors", () => {
  const meme: Meme[] = [
    {
      id: "firstMemeId",
      url: "memeUrl",
      title: "memeTitle",
    },
  ];
  const coll: string[] = ["firstMemeId"];

  test("should select meme list", () => {
    const result = selectMeme.projector(meme);
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual("firstMemeId");
  });

  test("should select meme collection", () => {
    const result = selectMemeCollection.projector(meme, coll);
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual("firstMemeId");
  });
});
