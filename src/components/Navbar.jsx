import { FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaYoutube, FaDiscord } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-6 lg:px-24">
      {/* Logo */}
      <div className="text-xl lg:text-2xl font-bold text-white animate-pulse transition duration-300 hover:scale-110 hover:opacity-80 cursor-pointer">
        Xen
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center justify-center gap-6 text-lg lg:text-xl">
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

        {/* YouTube */}
        <div className="group relative flex flex-col items-center">
          <a
            href="https://www.youtube.com/@XenOfficial_YT"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110 hover:opacity-60 text-red-600"
          >
            <FaYoutube />
          </a>
          <span className="absolute top-6 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
            YouTube
          </span>
        </div>

        {/* Discord */}
        <div className="group relative flex flex-col items-center">
          <a
            href="https://discord.gg/wMzZ5mPS"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110 hover:opacity-60 text-[#5865F2]"
          >
            <FaDiscord />
          </a>
          <span className="absolute top-6 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
            Discord
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
    </nav>
  );
};

export default Navbar;