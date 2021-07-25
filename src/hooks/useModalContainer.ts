import { useState, useEffect } from "react";

export const useModalContainer = () => {
  const [node, setNode] = useState<HTMLDivElement>(null as any);
  useEffect(() => {
    const modalNode = document.createElement("div");
    document.body.appendChild(modalNode);
    setNode(modalNode);
    return () => {
      document.body.removeChild(modalNode);
      setNode(null as any);
    };
  }, []);

  return { node };
};
