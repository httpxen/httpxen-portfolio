import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

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
  SiHostinger
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

// ==================== ANIMATION VARIANTS ====================
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

              {/* Tech Badges with Icons */}
              <div className="flex flex-wrap gap-3 mb-4">
                {experience.technologies.map((tech, idx) => {
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

              {/* MAPS SECTION */}
              {experience.company === "Colegio de San Juan de Letran Calamba | Facilities Management and General Services Division" && (
                <div className="mt-4">
                  <p className="text-sm text-neutral-400 mb-2">Location: Colegio de San Juan de Letran Calamba</p>
                  <iframe
                    title="Letran Calamba Satellite View"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.545233633644!2d121.15781417584144!3d14.220800085581176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd63e1282e62d9%3A0x9d6626d9f156784d!2sColegio%20de%20San%20Juan%20de%20Letran%20Calamba!5e1!3m2!1sen!2sph!4v1715800000000!5m2!1sen!2sph&maptype=satellite"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-lg max-w-full transition-all duration-500"
                  ></iframe>
                </div>
              )}

              {experience.company.includes("Calamba Water District") && (
                <div className="mt-4">
                  <p className="text-sm text-neutral-400 mb-2">Client: Calamba Water District</p>
                  <iframe
                    title="CWD Satellite View"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.7554347714456!2d121.16668727584119!3d14.20912178558913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd63dd49221d71%3A0x482bcc076e2e3e91!2sCalamba%20Water%20District!5e1!3m2!1sen!2sph!4v1715800000000!5m2!1sen!2sph&maptype=satellite"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-lg max-w-full transition-all duration-500"
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