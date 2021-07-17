import { useState } from "react";

export const useModal = () => {
  const [visible, setVisible] = useState(false);

  const toggleModalVisible = () => {
    setVisible(!visible);
  };

  return {
    visible,
    toggleModalVisible,
  };
};
