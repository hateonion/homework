import { isEmail } from "../validator";

describe("validator tests", () => {
  test("should return true if pass a valid email", () => {
    const result = isEmail("aaa@aa.com");
    expect(result).toBe(true);
  });

  test("should return false if pass a invalid email", () => {
    const result = isEmail("aaa@a");
    expect(result).toBe(false);
  });
});
