import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

// Color mapping para sa tech stack
const techColors = {
  HTML: "bg-orange-500/20 text-orange-400 border border-orange-500/40",
  CSS: "bg-blue-500/20 text-blue-400 border border-blue-500/40",
  Tailwindcss: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40",
  Bootstrap: "bg-purple-600/20 text-purple-500 border border-purple-600/40",
  React: "bg-sky-500/20 text-sky-400 border border-sky-500/40",
  "Next.js": "bg-neutral-100/20 text-white border border-neutral-200/40",
  JavaScript: "bg-yellow-400/20 text-yellow-300 border border-yellow-400/40",
  Java: "bg-red-600/20 text-red-500 border border-red-600/40",
  Lua: "bg-blue-700/20 text-blue-600 border border-blue-700/40",
  PHP: "bg-purple-500/20 text-purple-400 border border-purple-500/40",
  Laravel: "bg-red-500/20 text-red-400 border border-red-500/40",
  NodeJS: "bg-green-500/20 text-green-400 border border-green-500/40",
  Python: "bg-blue-500/20 text-yellow-300 border border-blue-500/40",
  Npm: "bg-red-600/20 text-red-500 border border-red-600/40",
  Vite: "bg-purple-400/20 text-purple-300 border border-purple-400/40",
  MongoDB: "bg-green-500/20 text-green-400 border border-green-500/40",
  PostgreSQL: "bg-sky-700/20 text-sky-600 border border-sky-700/40",
  XAMPP: "bg-orange-500/20 text-orange-400 border border-orange-500/40",
  MySQL: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40",
  Express: "bg-gray-500/20 text-gray-300 border border-gray-500/40",
  OpenAI: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40",
  Default: "bg-neutral-800 text-purple-300 border border-neutral-700",
};

const slideDown = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const slideRight = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const slideLeft = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="border-b border-neutral-900 pb-4 px-6 lg:px-20">
      <motion.h2
        variants={slideDown}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="my-20 text-center text-4xl text-white"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            {/* Project Image with Click to Zoom */}
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
                className="mb-6 rounded-xl shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:brightness-90 cursor-pointer"
                onClick={() => openModal(project.image)}
              />
            </motion.div>

            {/* Project Info */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 text-2xl font-semibold text-white">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => {
                  const colorClass = techColors[tech] || techColors.Default;
                  return (
                    <span
                      key={index}
                      className={`rounded-full px-3 py-1 text-sm font-medium shadow-sm backdrop-blur-sm ${colorClass}`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Modal for Zoomed Image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          >
            <motion.img
              src={selectedImage}
              alt="Zoomed project image"
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;