import { hasError, useValidation } from "../useValidation";
import { act, renderHook } from "@testing-library/react-hooks";

describe("useValidationHooks Tests", () => {
  test("should get proper validation result based on input validation fn", () => {
    const validationItem = [
      {
        name: "name",
        value: "4567",
        validationFn: (value: string) => value.length > 3,
      },
      {
        name: "email",
        value: "foobar@foo",
        validationFn: (value: string) => value.includes("aaaa"),
      },
    ];
    const { result } = renderHook(() => useValidation(validationItem));
    act(() => {
      result.current.validate();
    });
    expect(result.current.errors).toEqual({ email: true });
  });
});

describe("parseError Tests", () => {
  test("should return true if has error", () => {
    const result = hasError({ foo: true }, "foo");
    expect(result).toBe(true);
  });

  test("should return false if no error", () => {
    const result = hasError({ foo: true }, "bar");
    expect(result).toBe(false);
  });
});
