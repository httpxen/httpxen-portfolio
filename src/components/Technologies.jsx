import { useState, useRef, useEffect } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiTailwindcss, SiBootstrap, SiLaravel, SiNpm, SiJavascript, SiLua, SiVite, SiMysql, SiApache } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs, FaHtml5, FaCss3Alt, FaPhp, FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

const Technologies = () => {
  const [hoveredTech, setHoveredTech] = useState("");
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [containerWidth, setContainerWidth] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const animationProgress = useRef(0); // Track animation progress

  const techItems = [
    { Icon: FaHtml5, name: "HTML5", color: "text-orange-600", duration: 2 },
    { Icon: FaCss3Alt, name: "CSS3", color: "text-blue-500", duration: 2 },
    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500", duration: 2.5 },
    { Icon: SiBootstrap, name: "Bootstrap", color: "text-purple-600", duration: 2.3 },
    { Icon: RiReactjsLine, name: "React", color: "text-cyan-400", duration: 2.5 },
    { Icon: TbBrandNextjs, name: "Next.js", color: "text-white", duration: 3 },
    { Icon: SiJavascript, name: "Javascript", color: "text-yellow-400", duration: 2.7 },
    { Icon: FaJava, name: "Java", color: "text-red-600", duration: 3.2 },
    { Icon: SiLua, name: "Lua", color: "text-blue-700", duration: 2.8 },
    { Icon: FaPhp, name: "PHP", color: "text-indigo-600", duration: 3 },
    { Icon: SiLaravel, name: "Laravel", color: "text-red-500", duration: 3.1 },
    { Icon: FaNodeJs, name: "Node.js", color: "text-green-500", duration: 3 },
    { Icon: SiNpm, name: "Npm", color: "text-red-600", duration: 2.4 },
    { Icon: SiVite, name: "Vite", color: "text-purple-400", duration: 2.6 },
    { Icon: SiMongodb, name: "MongoDB", color: "text-green-500", duration: 2.5 },
    { Icon: BiLogoPostgresql, name: "PostgreSQL", color: "text-sky-700", duration: 2.2 },
    { Icon: SiApache, name: "XAMPP", color: "text-orange-500", duration: 2.4 }, 
    { Icon: SiMysql, name: "MySQL", color: "text-blue-600", duration: 2.3 }, 
  ];

  // Calculate container width for smooth looping
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.scrollWidth / 2);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Animation control
  useEffect(() => {
    if (shouldReduceMotion) {
      controls.set({ x: 0 });
      return;
    }

    const startAnimation = () => {
      controls.start({
        x: [animationProgress.current * -containerWidth, -containerWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20 * (1 - animationProgress.current), // Adjust duration based on progress
            ease: "linear",
          },
        },
      });
    };

    startAnimation();
  }, [controls, shouldReduceMotion, containerWidth]);

  // Update progress on animation frame
  useEffect(() => {
    let lastTime = 0;
    const updateProgress = (time) => {
      if (!shouldReduceMotion && containerWidth > 0) {
        const delta = time - lastTime;
        const progressPerMs = 1 / (20 * 1000); // Progress per millisecond for 20s duration
        animationProgress.current = (animationProgress.current + delta * progressPerMs) % 1;
        lastTime = time;
      }
      requestAnimationFrame(updateProgress);
    };

    const animationFrame = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrame);
  }, [shouldReduceMotion, containerWidth]);

  // Hover and tap handlers
  const handleInteractionStart = (name) => {
    setHoveredTech(name);
    if (!shouldReduceMotion) {
      controls.stop();
    }
  };

  const handleInteractionEnd = () => {
    setHoveredTech("");
    if (!shouldReduceMotion) {
      controls.start({
        x: [animationProgress.current * -containerWidth, -containerWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20 * (1 - animationProgress.current), // Resume with remaining time
            ease: "linear",
          },
        },
      });
    }
  };

  return (
    <section className="pb-24" aria-label="Technologies Section">
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="my-12 text-center text-3xl font-bold text-white"
      >
        The Tools I Build With
      </motion.h2>
      <p className="text-center text-gray-400 mb-8">
        Proven technologies I’ve mastered through real projects and problem-solving
      </p>

      <div className="relative overflow-hidden px-4">
        <motion.div
          ref={containerRef}
          className="flex gap-4"
          animate={controls}
          style={{ width: `${containerWidth * 2}px` }}
        >
          {[...techItems, ...techItems].map(({ Icon, name, color, duration }, index) => (
            <motion.div
              key={`${name}-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={!shouldReduceMotion && {
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="flex flex-shrink-0 items-center justify-center w-20 h-20"
              onHoverStart={() => handleInteractionStart(name)}
              onHoverEnd={handleInteractionEnd}
              onTap={() => handleInteractionStart(name)}
            >
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -8] }}
                transition={
                  shouldReduceMotion
                    ? {}
                    : {
                        duration: duration * 0.8,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                      }
                }
                className="rounded-xl border-2 border-neutral-800 p-3 bg-neutral-900/90 shadow-lg"
                aria-label={`Technology: ${name}`}
              >
                <Icon className={`text-4xl ${color}`} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 text-center text-xl h-8">
        <motion.span
          key={hoveredTech}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="text-neutral-300"
        >
        </motion.span>
               {hoveredTech || "Hover or tap a technology"}
      </div>
    </section>
  );
};

export default Technologies;