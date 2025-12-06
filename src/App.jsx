import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initial Load Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds initial load
    return () => clearTimeout(timer);
  }, []);

  // Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Helper for delayed navigation
  const handleNavClick = (url) => {
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
        window.open(url, '_blank');
    }, 1500); // 1.5s delay for link clicks
  };

  return (
    <Router>
      <div className="font-body bg-dark-900 text-light-100 min-h-screen selection:bg-primary selection:text-white">
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        
        <Routes>
          <Route path="/" element={<Home handleNavClick={handleNavClick} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
