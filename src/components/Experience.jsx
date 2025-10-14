import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

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
              <div className="flex flex-wrap gap-2 mb-4">
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
              {experience.company === "Colegio de San Juan de Letran Calamba | Facilities Management and General Services Division" && (
                <div className="mt-4">
                  <p className="text-sm text-neutral-400 mb-2">Location: Colegio de San Juan de Letran Calamba</p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.103362077727!2d121.16540599999999!3d14.188723899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd63e1282e62d9%3A0x9d6626d9f156784d!2sColegio%20de%20San%20Juan%20de%20Letran%20Calamba!5e0!3m2!1sen!2sph!4v1756019833478!5m2!1sen!2sph"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-lg max-w-full"
                  ></iframe>
                </div>
              )}
              {experience.company.includes("Calamba Water District") && (
                <div className="mt-4">
                  <p className="text-sm text-neutral-400 mb-2">Client: Calamba Water District</p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d607.7666078113074!2d121.16447046578175!3d14.192613288006056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd63dde4221d71%3A0x2b48f46c8c2e3e91!2sCalamba%20Water%20District!5e0!3m2!1sen!2sph!4v1756021392731!5m2!1sen!2sph"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-lg max-w-full"
                  ></iframe>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;