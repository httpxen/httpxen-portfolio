import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Ito ang tatawagin ng Preloader kapag tapos na ang lahat ng strips
  const handleFinishLoading = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" finishLoading={handleFinishLoading} />
        )}
      </AnimatePresence>

      {/* Lalabas lang ang portfolio kapag isLoading === false */}
      {!isLoading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"
        >
          {/* Background */}
          <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full 
              bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
            </div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full 
              bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
            </div>
          </div>

          {/* Content */}
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Gallery />
          <Projects />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default App;