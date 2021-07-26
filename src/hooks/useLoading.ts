import { useCallback, useState } from "react";

export const useLoading = (
  loadingTrigger: (...args: any[]) => Promise<any>
) => {
  const [loading, setLoading] = useState(false);

  const triggerWithLoading = useCallback(
    async (...args) => {
      setLoading(true);
      const result = await loadingTrigger(...args);
      setLoading(false);
      return result;
    },
    [loadingTrigger]
  );

  return { loading, triggerWithLoading };
};
