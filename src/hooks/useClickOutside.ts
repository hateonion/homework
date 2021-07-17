import { useEffect, useRef, useState } from "react";

export const useClickOutside = () => {
  const [isClickOutside, setIsClickOutside] = useState(false);
  const targetContainer =
    useRef<HTMLElement>() as unknown as React.MutableRefObject<HTMLButtonElement>;

  const handleClickOutside = (event: MouseEvent) => {
    setIsClickOutside(
      targetContainer.current && !targetContainer.current.contains(event.target)
    );
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return {
    targetContainer,
    isClickOutside,
  };
};
