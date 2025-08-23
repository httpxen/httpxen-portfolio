import { useRef } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Drei.jpg";
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
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=opulenciaandrei23@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Andrei Opulencia via email"
                className="border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-cyan-500 hover:text-gray-900 hover:-rotate-2 transition-all duration-300"
              >
                Let's Connect
              </a>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0">
          <div className="flex flex-col items-center">
            <motion.img
              ref={imageRef}
              initial={{ y: 100, opacity: 0 }}
              animate={imageInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              src={profilePic}
              alt="Andrei Opulencia profile picture"
              className="w-[200px] sm:w-[300px] lg:w-[400px] h-auto rounded-full object-cover filter brightness-75 shadow-md"
            />

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
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=opulenciaandrei23@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Andrei Opulencia via email"
                className="border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-cyan-500 hover:text-gray-900 hover:-rotate-2 transition-all duration-300 text-center"
              >
                Let's Connect
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
