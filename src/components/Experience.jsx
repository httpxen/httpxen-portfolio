import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

// Color mapping para sa tech stack
// Color mapping para sa tech stack
const techColors = {
  HTML: "bg-orange-500/20 text-orange-400 border border-orange-500/40",
  CSS3: "bg-blue-500/20 text-blue-400 border border-blue-500/40",
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
  Npm: "bg-red-600/20 text-red-500 border border-red-600/40",
  Vite: "bg-purple-400/20 text-purple-300 border border-purple-400/40",
  MongoDB: "bg-green-500/20 text-green-400 border border-green-500/40",
  PostgreSQL: "bg-sky-700/20 text-sky-600 border border-sky-700/40",
  XAMPP: "bg-orange-500/20 text-orange-400 border border-orange-500/40",
  MySQL: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40",
  Express: "bg-gray-500/20 text-gray-300 border border-gray-500/40",

  // fallback
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

const Experience = () => {
  return (
    <div className="pb-4 px-6 lg:px-20">
      <motion.h2
        variants={slideDown}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="my-20 text-center text-4xl text-white"
      >
        Experience
      </motion.h2>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              className="w-full lg:w-1/4 mb-2"
            >
              <p className="text-sm text-neutral-400">{experience.year}</p>
            </motion.div>

            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-white">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => {
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
    </div>
  );
};

export default Experience;
