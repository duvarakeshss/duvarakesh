import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Add a small delay to allow page transition to complete
    const scrollTimer = setTimeout(() => {
      if (!hash) {
        // Smooth scroll to top on route change with enhanced easing
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // Smooth scroll to anchor if hash exists with better positioning
        const element = document.getElementById(hash.substring(1));
        if (element) {
          const headerOffset = 80; // Account for fixed navbar
          const elementPosition = element.offsetTop;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 400); // Increased delay to sync with enhanced page transition

    return () => clearTimeout(scrollTimer);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;