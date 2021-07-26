import { useCallback, useState } from "react";

interface ValidationItem {
  name: string;
  value: any;
  validationFn: (value: any) => boolean;
}

export const useValidation = (validations: ValidationItem[]) => {
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const validate = useCallback(() => {
    const validationResult = validations
      .filter((item) => {
        const isValidationPass = item.validationFn(item.value);
        return !isValidationPass;
      })
      .reduce<Record<string, boolean>>((pre, cur) => {
        return {
          ...pre,
          [cur.name]: true,
        };
      }, {});

    setErrors(validationResult);
    return validationResult;
  }, [validations]);
  return { errors, validate };
};

export const hasError = (
  validationResults: Record<string, boolean>,
  target: string
) => {
  const result = validationResults[target];
  if (result === undefined) {
    return false;
  }
  return result;
};
