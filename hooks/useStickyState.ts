import { useEffect, useState } from 'react';

/**
 * A custom React hook that creates a state variable that persists its value across page reloads.
 *
 * @param key - The key used to store the value in localStorage.
 * @param defaultValue - The default value for the state variable.
 * @returns An array with the current value and a function to update the value.
 */
export function useStickyState<T extends string>(
  key: string,
  defaultValue: T | undefined,
): [T | undefined, (v: T) => void] {
  const [value, setValue] = useState<T | undefined>(defaultValue);
  useEffect(() => {
    const stickyValue = localStorage.getItem(key) as T;
    if (stickyValue !== null) {
      setValue(stickyValue);
    }
  }, [key, setValue]);

  return [
    value,
    (v: T) => {
      localStorage.setItem(key, v);
      setValue(v);
    },
  ];
}
