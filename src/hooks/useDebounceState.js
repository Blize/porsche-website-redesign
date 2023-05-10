import { useEffect, useState } from "react";

const useDebounceState = (value, wait) => {
  const [debouncedStateValue, setDebouncedStateValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedStateValue(value);
    }, wait);

    return () => {
      clearTimeout(handler);
    };
  }, [value, wait]);

  return debouncedStateValue;
};

export default useDebounceState;
