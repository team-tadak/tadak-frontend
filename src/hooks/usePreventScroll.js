import { useEffect } from 'react';

function usePreventScroll() {
  useEffect(() => {
    const body = document.querySelector('html');
    if (body) {
      body.style.overflow = 'hidden';
    }

    return () => {
      if (body) {
        body.style.overflow = 'visible';
      }
    };
  }, []);
}

export default usePreventScroll;
