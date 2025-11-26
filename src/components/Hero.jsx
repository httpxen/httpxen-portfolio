import { useRef, useState } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Drei.png";
import { motion, useInView } from "framer-motion";

const container = (direction = "top", delay = 0) => ({
  hidden: { 
    y: direction === "top" ? -100 : 100, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.6, 
      delay, 
      ease: "easeInOut" 
    }
  },
});

// Modal animation variants
const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const mobileButtonRef = useRef(null);

  const titleInView = useInView(titleRef, { threshold: 0.5, once: true });
  const subtitleInView = useInView(subtitleRef, { threshold: 0.5, once: true });
  const paraInView = useInView(paraRef, { threshold: 0.5, once: true });
  const buttonInView = useInView(buttonRef, { threshold: 0.5, once: true });
  const imageInView = useInView(imageRef, { threshold: 0.5, once: true });
  const mobileButtonInView = useInView(mobileButtonRef, { threshold: 0.5, once: true });

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Contact information
  const contactInfo = [
    { platform: "Email", value: "opulenciaandrei23@gmail.com"},
    { platform: "LinkedIn", value: "Tom Andrei Opulencia"},
    { platform: "GitHub", value: "httpxen"},
  ];

  return (
    <div className="pb-24 lg:pb-20 lg:mb-35 px-4 sm:px-6 lg:px-16">
      <div className="flex flex-wrap max-w-6xl mx-auto">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:pl-12">
            <motion.h1
              ref={titleRef}
              variants={container("top", 0)}
              initial="hidden"
              animate={titleInView ? "visible" : "hidden"}
              className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl text-white"
            >
              Andrei Opulencia
            </motion.h1>

            <motion.span
              ref={subtitleRef}
              variants={container("top", 0.2)}
              initial="hidden"
              animate={subtitleInView ? "visible" : "hidden"}
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent text-2xl tracking-tight font-medium"
            >
              Junior Web Developer
            </motion.span>

            <motion.p
              ref={paraRef}
              variants={container("top", 0.4)}
              initial="hidden"
              animate={paraInView ? "visible" : "hidden"}
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-gray-200 text-xs sm:text-sm"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* DESKTOP BUTTONS */}
            <motion.div
              ref={buttonRef}
              variants={container("top", 0.6)}
              initial="hidden"
              animate={buttonInView ? "visible" : "hidden"}
              className="mt-4 hidden lg:flex gap-4"
            >
              <a
                href=""
                download=""
                aria-label="Download Andrei Opulencia's CV"
                className="border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-cyan-500 hover:text-gray-900 hover:rotate-2 transition-all duration-300"
              >
                Download CV
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                aria-label="Open contact information modal"
                className="border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-cyan-500 hover:text-gray-900 hover:-rotate-2 transition-all duration-300"
              >
                Let's Connect
              </button>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0">
          <div className="flex flex-col items-center">
            <div className="relative w-[200px] sm:w-[300px] lg:w-[400px]">
              <motion.img
                ref={imageRef}
                initial={{ y: 100, opacity: 0 }}
                animate={imageInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                src={profilePic}
                alt="Andrei Opulencia profile picture"
                className="relative w-full h-auto rounded-lg object-cover filter brightness-75 shadow-md" // Binago dito: rounded-full -> rounded-lg
              />
            </div>

            {/* MOBILE BUTTONS */}
            <motion.div
              ref={mobileButtonRef}
              variants={container("bottom", 0.6)}
              initial="hidden"
              animate={mobileButtonInView ? "visible" : "hidden"}
              className="mt-6 flex flex-col sm:flex-row gap-4 lg:hidden w-full max-w-md"
            >
              <a
                href=""
                download=""
                aria-label="Download Andrei Opulencia's CV"
                className="border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-cyan-500 hover:text-gray-900 hover:rotate-2 transition-all duration-300 text-center"
              >
                Download CV
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                aria-label="Open contact information modal"
                className="border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-cyan-500 hover:text-gray-900 hover:-rotate-2 transition-all duration-300 text-center"
              >
                Let's Connect
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative bg-gray-900/30 backdrop-blur-lg rounded-xl p-8 w-full max-w-md mx-4 border border-gray-700/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">Contact Me</h2>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-200">
                  <span className="font-medium text-white">{info.platform}:</span>
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    {info.value}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-8 w-full bg-gradient-to-r from-pink-500 to-cyan-400 text-white px-6 py-3 rounded-lg font-medium hover:from-pink-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;