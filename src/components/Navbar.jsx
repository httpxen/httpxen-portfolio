import { 
  FaLinkedin, 
  FaGithub, 
  FaInstagram, 
  FaTiktok, 
  FaYoutube, 
  FaDiscord 
} from "react-icons/fa";

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
          <span className="absolute top-8 text-[10px] bg-zinc-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
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
          <span className="absolute top-8 text-[10px] bg-zinc-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
            GitHub
          </span>
        </div>

        {/* Facebook */}
        <div className="group relative flex flex-col items-center">
          <a
            href="https://www.facebook.com/andrei.opulencia.9/" 
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110 hover:opacity-60 text-[#1877F2]"
          >
            <svg 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              className="w-[1.1em] h-[1.1em]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <span className="absolute top-8 text-[10px] bg-zinc-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
            Facebook
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
          <span className="absolute top-8 text-[10px] bg-zinc-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
            TikTok
          </span>
        </div>

        {/* YouTube */}
        <div className="group relative flex flex-col items-center">
          <a
            href="https://www.youtube.com/@XenOfficial_YT"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110 hover:opacity-60 text-[#FF0000]"
          >
            <FaYoutube />
          </a>
          <span className="absolute top-8 text-[10px] bg-zinc-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
            YouTube
          </span>
        </div>

        {/* Discord */}
        <div className="group relative flex flex-col items-center">
          <a
            href="https://discord.gg/ms2cQ895GV"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110 hover:opacity-60 text-[#5865F2]"
          >
            <FaDiscord />
          </a>
          <span className="absolute top-8 text-[10px] bg-zinc-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
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
          <span className="absolute top-8 text-[10px] bg-zinc-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
            Instagram
          </span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;