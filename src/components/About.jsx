import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="pb-16">
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-semibold"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center justify-between px-4 gap-8 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center">
            <div className="relative w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={aboutImg}
                alt="About Andrei Opulencia at Colegio de San Juan de Letran"
                aria-label="Profile image of Andrei Opulencia at Colegio de San Juan de Letran"
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="mt-2 text-neutral-200 text-[10px] sm:text-xs md:text-sm font-normal text-center">
              Colegio de San Juan de Letran | FMGSD
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-8"
        >
          <p className="max-w-xl pt-0 pb-2 text-neutral-200 text-lg leading-relaxed">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;