import { classNames } from "./classNames";

describe("classNames", () => {
  test("whit only first params", () => {
    expect(classNames("someClass")).toBe("someClass");
  });
});
