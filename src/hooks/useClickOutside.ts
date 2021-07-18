import { useEffect, useRef, useState } from "react";

export const useClickOutside = () => {
  const [isClickOutside, setIsClickOutside] = useState(false);
  const targetContainer =
    useRef<HTMLElement>() as unknown as React.MutableRefObject<HTMLElement>;

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    setIsClickOutside(
      targetContainer.current && !targetContainer.current.contains(event.target)
    );
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true);
    document.addEventListener("touchend", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, []);

  return {
    targetContainer,
    isClickOutside,
  };
};
