import { Meme } from "../meme/meme.model";
import { selectMeme, selectMemeCollection } from "./meme.selectors";

describe("Selectors", () => {
  const meme: Meme[] = [
    {
      id: 1,
      url: "memeUrl",
      title: "memeTitle",
      postLink: "memelink",
      subreddit: "postUrl",
    },
  ];
  const coll: number[] = [1];

  test("should select meme list", () => {
    const result = selectMeme.projector(meme);
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual(1);
  });

  test("should select meme collection", () => {
    const result = selectMemeCollection.projector(meme, coll);
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual(1);
  });
});
