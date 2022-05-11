import { useEffect, useRef, useState } from "react";

export const useBeforeMount = (callback, cleanup) => {
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) callback();
    mounted.current = true;

    return cleanup;
  }, []);
};

export const useLocalStorage = (key, initialState) => {
  const [localValue, setLocalValue] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? initialState
  );

  const setValue = (value) => {
    value = value instanceof Function ? value(localValue) : value;
    localStorage.setItem(key, JSON.stringify(value));
    setLocalValue(value);
  };

  return [localValue, setValue];
};
