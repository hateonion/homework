const PRIMARY_STYLE =
  "focus:outline-none text-white text-sm rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg";
const DISABLE_STYLE =
  "focus:outline-none text-white text-sm rounded-md bg-blue-300 cursor-not-allowed";

export const computeDisableStyle = (disabled: boolean) => {
  return disabled ? DISABLE_STYLE : PRIMARY_STYLE;
};
