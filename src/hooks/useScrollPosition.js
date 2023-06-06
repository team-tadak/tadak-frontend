import { useEffect, useState } from 'react';

function useScrollPosition() {
  const [scrollData, setScrollData] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleScroll() {
      setScrollData({ x: window.scrollX, y: window.scrollY });
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollX: scrollData.x, scrollY: scrollData.y };
}

export default useScrollPosition;
