import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <footer className="border-t border-neutral-800 py-8 px-4 sm:px-6 lg:px-16 text-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-4"
      >
        <div className="flex items-center justify-center gap-6 text-lg">
          {/* LinkedIn */}
          <div className="group relative flex flex-col items-center">
            <a
              href="https://www.linkedin.com/in/tom-andrei-opulencia-1b5b90314/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-110 hover:opacity-60 text-[#0A66C2]"
            >
              <FaLinkedin />
            </a>
            <span className="absolute top-6 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
              LinkedIn
            </span>
          </div>

          {/* GitHub */}
          <div className="group relative flex flex-col items-center">
            <a
              href="https://github.com/httpxen"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-110 hover:opacity-60 text-white"
            >
              <FaGithub />
            </a>
            <span className="absolute top-6 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
              GitHub
            </span>
          </div>

          {/* TikTok */}
          <div className="group relative flex flex-col items-center">
            <a
              href="https://www.tiktok.com/@drei_xen"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-110 hover:opacity-60 text-white"
            >
              <FaTiktok />
            </a>
            <span className="absolute top-6 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
              TikTok
            </span>
          </div>

          {/* Instagram */}
          <div className="group relative flex flex-col items-center">
            <a
              href="https://www.instagram.com/drei_xen/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-110 hover:opacity-60 text-[#E1306C]"
            >
              <FaInstagram />
            </a>
            <span className="absolute top-6 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
              Instagram
            </span>
          </div>
        </div>

        <p className="text-white text-xs sm:text-sm font-light">
          © {new Date().getFullYear()} Andrei Opulencia. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
