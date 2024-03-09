import React from "react";

export default function useEvent<A extends unknown[], B>(fn: (...args: A) => B) {
  const ref = React.useRef(fn);
  React.useLayoutEffect(() => void (ref.current = fn));
  return React.useCallback((...args: A) => ref.current(...args), [])
}