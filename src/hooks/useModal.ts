import { useState } from "react";

export const useModal = (visibleCallback: () => void) => {
  const [visible, setVisible] = useState(false);

  const setVisibility = (visible: boolean) => {
    setVisible(visible);
    visibleCallback();
  };

  return {
    visible,
    setVisibility,
  };
};
