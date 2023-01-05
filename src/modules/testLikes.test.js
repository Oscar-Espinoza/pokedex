import { getLikes } from "./involvementApi";
import 'whatwg-fetch';

describe("Testing length of Likes", () => {
  let pokeLikes = "";
  beforeEach(async () => {
    pokeLikes = await getLikes("ivysaur");
  });
  test("length of ivysaur Likes", () => {
    expect(pokeLikes).toEqual(5);
  });
});