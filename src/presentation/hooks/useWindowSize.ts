import { useEffect, useLayoutEffect, useState } from 'react';

type WindowSize = {
  width: number;
  height: number;
};

export default function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);
  useLayoutEffect(() => {
    handleSize();
  }, []);

  return windowSize;
}
