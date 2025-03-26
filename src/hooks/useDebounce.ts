import { useRef } from "react";

export const useDebounce = <T extends (...args: never[]) => void>(fn: T, delay: number) => {
  const timeoutRef = useRef<number | null>(null);

  function debounceFn(...args: Parameters<T>) {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debounceFn;
};