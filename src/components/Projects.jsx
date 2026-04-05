import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

// ==================== TECH ICONS ====================
import { 
  FaHtml5, 
  FaJava 
} from "react-icons/fa";

import { 
  RiCss3Fill, 
  RiJavascriptFill, 
  RiReactjsLine, 
  RiNodejsLine, 
  RiTailwindCssFill, 
  RiBootstrapFill 
} from "react-icons/ri";

import { 
  SiTypescript, 
  SiNextdotjs, 
  SiVercel, 
  SiLua, 
  SiPhp, 
  SiLaravel, 
  SiPython, 
  SiNpm, 
  SiVite, 
  SiMongodb, 
  SiPostgresql, 
  SiXampp, 
  SiMysql, 
  SiOpenai, 
  SiCloudflare,
  SiHostinger // Idinagdag para sa Hostinger
} from "react-icons/si";

// ==================== TECH STACK DATA ====================
const techStackData = {
  HTML: { 
    class: "bg-orange-500/20 text-orange-400 border border-orange-500/40", 
    icon: <FaHtml5 className="text-xl" /> 
  },
  CSS: { 
    class: "bg-blue-500/20 text-blue-400 border border-blue-500/40", 
    icon: <RiCss3Fill className="text-xl" /> 
  },
  Tailwindcss: { 
    class: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40", 
    icon: <RiTailwindCssFill className="text-xl" /> 
  },
  Bootstrap: { 
    class: "bg-purple-600/20 text-purple-500 border border-purple-600/40", 
    icon: <RiBootstrapFill className="text-xl" /> 
  },
  React: { 
    class: "bg-sky-500/20 text-sky-400 border border-sky-500/40", 
    icon: <RiReactjsLine className="text-xl" /> 
  },
  TypeScript: { 
    class: "bg-blue-500/20 text-blue-400 border border-blue-500/40", 
    icon: <SiTypescript className="text-xl" /> 
  },
  "Next.js": { 
    class: "bg-black text-white border border-neutral-800 hover:bg-neutral-900", 
    icon: <SiNextdotjs className="text-xl" /> 
  },
  JavaScript: { 
    class: "bg-yellow-400/20 text-yellow-300 border border-yellow-400/40", 
    icon: <RiJavascriptFill className="text-xl" /> 
  },
  Vercel: { 
    class: "bg-white/10 text-white border border-white/20 hover:bg-white/20", 
    icon: <SiVercel className="text-xl" /> 
  },
  Java: { 
    class: "bg-red-600/20 text-red-500 border border-red-600/40", 
    icon: <FaJava className="text-xl" /> 
  },
  Lua: { 
    class: "bg-blue-700/20 text-blue-600 border border-blue-700/40", 
    icon: <SiLua className="text-xl" /> 
  },
  PHP: { 
    class: "bg-purple-500/20 text-purple-400 border border-purple-500/40", 
    icon: <SiPhp className="text-xl" /> 
  },
  Laravel: { 
    class: "bg-red-500/20 text-red-400 border border-red-500/40", 
    icon: <SiLaravel className="text-xl" /> 
  },
  NodeJS: { 
    class: "bg-green-500/20 text-green-400 border border-green-500/40", 
    icon: <RiNodejsLine className="text-xl" /> 
  },
  Python: { 
    class: "bg-blue-500/20 text-yellow-300 border border-blue-500/40", 
    icon: <SiPython className="text-xl" /> 
  },
  Npm: { 
    class: "bg-red-600/20 text-red-500 border border-red-600/40", 
    icon: <SiNpm className="text-xl" /> 
  },
  Vite: { 
    class: "bg-purple-400/20 text-purple-300 border border-purple-400/40", 
    icon: <SiVite className="text-xl" /> 
  },
  MongoDB: { 
    class: "bg-green-500/20 text-green-400 border border-green-500/40", 
    icon: <SiMongodb className="text-xl" /> 
  },
  PostgreSQL: { 
    class: "bg-sky-700/20 text-sky-600 border border-sky-700/40", 
    icon: <SiPostgresql className="text-xl" /> 
  },
  XAMPP: { 
    class: "bg-orange-500/20 text-orange-400 border border-orange-500/40", 
    icon: <SiXampp className="text-xl" /> 
  },
  MySQL: { 
    class: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40", 
    icon: <SiMysql className="text-xl" /> 
  },
  OpenAI: { 
    class: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40", 
    icon: <SiOpenai className="text-xl" /> 
  },
  Cloudflare: { 
    class: "bg-orange-500/20 text-orange-500 border border-orange-500/40", 
    icon: <SiCloudflare className="text-xl" /> 
  },
  Hostinger: { 
    class: "bg-violet-600/20 text-violet-400 border border-violet-500/40", 
    icon: <SiHostinger className="text-xl" /> 
  },
  Default: { 
    class: "bg-neutral-800 text-purple-300 border border-neutral-700", 
    icon: null 
  },
};

// Animation Variants
const slideDown = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideRight = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideLeft = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2, ease: "easeIn" } },
};

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="border-b border-neutral-900 pb-4 px-6 lg:px-20">
      <motion.h2
        variants={slideDown}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="my-20 text-center text-4xl text-white font-bold"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            {/* Project Image */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              className="w-full lg:w-1/4 mb-4 lg:mb-0 flex justify-center"
            >
              <img
                src={project.image}
                width={220}
                height={220}
                alt={project.title}
                className="mb-6 rounded-xl shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:brightness-90 cursor-pointer object-cover"
                onClick={() => openModal(project.image)}
              />
            </motion.div>

            {/* Project Info */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              className="w-full max-w-xl lg:w-3/4 lg:pl-10"
            >
              <div className="flex items-center justify-between mb-2">
                <h6 className="text-2xl font-semibold text-white">
                  {project.title}
                </h6>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>

              <p className="mb-4 text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Badges with Icons */}
              <div className="flex flex-wrap gap-3 mb-4">
                {project.technologies.map((tech, idx) => {
                  const techInfo = techStackData[tech] || techStackData.Default;
                  return (
                    <span
                      key={idx}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider border shadow-md backdrop-blur-md transition-all hover:scale-110 active:scale-95 ${techInfo.class}`}
                    >
                      {techInfo.icon}
                      {tech}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          >
            <motion.img
              src={selectedImage}
              alt="Zoomed project image"
              className="max-w-full max-h-full rounded-2xl shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-6 right-6 text-white text-5xl font-light hover:text-cyan-400 transition-colors"
              onClick={closeModal}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;