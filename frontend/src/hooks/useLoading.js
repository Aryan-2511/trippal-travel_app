import { useState, useCallback } from "react";

function useLoading() {
  const [isLoading, setIsLoading] = useState(false);

  const withLoading = useCallback(async (asyncFn) => {
    setIsLoading(true);
    try {
      await asyncFn();
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, withLoading];
}

export default useLoading;
