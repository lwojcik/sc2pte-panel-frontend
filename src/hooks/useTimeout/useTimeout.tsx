import { useEffect, useRef } from 'react';

const useTimeout = (callback: any, delay: number) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback) (savedCallback as any).current();
    }
    if (delay !== null) {
      const id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }
    return () => null;
  }, [delay]);
};

export default useTimeout;
