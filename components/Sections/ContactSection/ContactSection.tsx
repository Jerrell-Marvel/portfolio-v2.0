import Link from "next/link";
import { motion } from "framer-motion";

const textVariants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 75,
    },
  },
};

const logoVariants = {
  hover: {
    scale: 1.1,
    filter: "grayscale(0)",
    transition: {
      type: "spring",
      ease: "easeIn",
      duration: 1,
    },
  },
};

const logos = [
  { link: "https://www.instagram.com/jerrell.marvel/", name: "Instagram", img: "instagram.webp" },
  { link: "https://www.linkedin.com/in/jerrell-marvel-573aa0256/", name: "Linked in", img: "linked-in.png" },
  { link: "https://github.com/Jerrell-Marvel", name: "Github", img: "github.png" },
];

const ContactSection = () => {
  return (
    <div className="pt-8 md:pt-16 text-center px-12 pb-8 top-0 z-40 sticky overflow-hidden">
      <motion.h3 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-8" variants={textVariants} whileInView="visible" initial="hidden">
        Contact me
      </motion.h3>

      {/* <p className="md:text-5xl text-xl">gggggggggggg</p> */}
      {/* <p className="md:text-5xl text-xl block">jerrell.marvel88@gmail.com</p> */}

      <motion.a href="mailto:jerrell.marvel88@gmail.com" className="md:text-5xl text-xl inline-block" variants={textVariants} whileInView="visible" initial="hidden">
        jerrell.marvel88@gmail.com
      </motion.a>

      <motion.div className="flex gap-6 justify-center mt-8" variants={textVariants} whileInView="visible" initial="hidden">
        {logos.map((logo) => {
          return (
            <motion.div className="w-8 h-8 grayscale" variants={logoVariants} whileHover="hover" key={logo.name}>
              <a href={logo.link} target="_blank" rel="noreferrer">
                <motion.img src={`/${logo.img}`} alt="" className="w-full" />
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ContactSection;
