import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="pb-24">
      {/* Title */}
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="my-16 text-center text-4xl font-bold tracking-wide font-poppins"
      >
        About <span className="text-yellow-400">Me</span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-start justify-between px-6 gap-12 lg:gap-20">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center lg:items-end w-full lg:w-1/2"
        >
          <div className="relative w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px] rounded-xl shadow-lg overflow-hidden group">
            <img
              src={aboutImg}
              alt="Andrei Opulencia"
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 brightness-90"
            />
          </div>
          <p className="mt-3 text-neutral-300 text-xs sm:text-sm text-center">
            Colegio de San Juan de Letran Calamba | FMGSD
          </p>
        </motion.div>

        {/* Animated Separator Line */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden lg:block w-[1px] h-80 bg-neutral-700 rounded-full"
        />
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="block lg:hidden w-40 h-[1px] bg-neutral-700 rounded-full my-4"
        />

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"
        >
          <p className="max-w-xl text-neutral-300 text-lg leading-relaxed text-center lg:text-left">
            {ABOUT_TEXT}
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mt-8 w-full lg:w-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-lg bg-gradient-to-br from-yellow-500/20 to-yellow-400/10 backdrop-blur-md border border-yellow-500/30 shadow-md text-center"
            >
              <h3 className="text-xl font-bold text-yellow-400">1+</h3>
              <p className="text-xs text-neutral-400">Years Exp.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-lg bg-gradient-to-br from-green-500/20 to-green-400/10 backdrop-blur-md border border-green-500/30 shadow-md text-center"
            >
              <h3 className="text-xl font-bold text-green-400">5</h3>
              <p className="text-xs text-neutral-400">Projects</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-400/10 backdrop-blur-md border border-blue-500/30 shadow-md text-center"
            >
              <h3 className="text-lg font-bold text-blue-400">Full Stack</h3>
              <p className="text-xs text-neutral-400">Developer</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
