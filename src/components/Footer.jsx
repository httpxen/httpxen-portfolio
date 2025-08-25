import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const socials = [
    {
      href: "https://www.linkedin.com/in/tom-andrei-opulencia-1b5b90314/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
      color: "text-[#0A66C2] hover:drop-shadow-[0_0_6px_#0A66C2]",
    },
    {
      href: "https://github.com/httpxen",
      label: "GitHub",
      icon: <FaGithub />,
      color: "text-white hover:drop-shadow-[0_0_6px_#ffffff]",
    },
    {
      href: "https://www.tiktok.com/@drei_xen",
      label: "TikTok",
      icon: <FaTiktok />,
      color: "text-white hover:drop-shadow-[0_0_6px_#ff0050]", // pink accent glow
    },
    {
      href: "https://www.instagram.com/drei_xen/",
      label: "Instagram",
      icon: <FaInstagram />,
      color: "text-[#E1306C] hover:drop-shadow-[0_0_6px_#E1306C]",
    },
  ];

  return (
    <footer className="relative py-10 px-6 sm:px-8 lg:px-16 text-center overflow-hidden">
      {/* Gradient border top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-6"
      >
        {/* Social Icons */}
        <div className="flex items-center justify-center gap-8 text-2xl">
          {socials.map((s, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center"
            >
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition duration-300 hover:scale-125 ${s.color}`}
              >
                {s.icon}
              </a>
              <span className="absolute top-8 text-xs bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition duration-300 pointer-events-none">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-neutral-400 text-xs sm:text-sm font-light tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="text-white">Andrei Opulencia</span>. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
