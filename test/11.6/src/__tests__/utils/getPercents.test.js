import { getPercents } from "../../utils/getPercents.js";

describe("tests for getPercents function", () => {
  it("find 20% of 200", () => expect(getPercents(20, 200)).toBe(40));
  it("find 5% of 1", () => expect(getPercents(5, 1)).toBe(0.05));
  it("find 200% of 2", () => expect(getPercents(200, 2)).toBe(4));
});
