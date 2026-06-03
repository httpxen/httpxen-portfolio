import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react'; // Mas eleganteng tingnan ang Chevron kaysa sa Arrow

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        isVisible ? null : setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full 
          bg-slate-900/60 text-slate-200 backdrop-blur-md 
          border border-slate-700/50 shadow-lg shadow-black/20
          transition-all duration-500 ease-out
          hover:bg-slate-850 hover:text-white hover:border-purple-500/50 hover:shadow-purple-500/10
          hover:-translate-y-1 active:scale-95
          ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} className="stroke-[2.5]" />
      </button>
    </>
  );
};

export default ScrollToTop;