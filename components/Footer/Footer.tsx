import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";
const imgVariants = {
  hidden: {
    scale: 1.1,
  },
  visible: {
    scale: 2,
    // opacity: 0.2,
    transition: {
      duration: 4,
    },
  },
};

const h3Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    transition: {
      delay: 1,
      duration: 1,
    },
    opacity: 1,
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: "90%",
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

const Footer = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <motion.img src="/bg-landscape2.webp" alt="" className="opacity-20 block bg-fixed w-full" whileInView="visible" variants={imgVariants} />

      <motion.div variants={h3Variants} whileInView="visible" initial="hidden" className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-end"></motion.div>
      <div className="bg-gradient-top absolute top-0 w-full h-1/2"></div>
      <div className="bg-gradient-bottom absolute bottom-[0] w-full h-1/2"></div>

      <motion.div className="md:text-2xl text-lg text-slate-500 absolute bottom-0 w-full text-center pb-8 md:pb-16" variants={textVariants} initial="hidden" whileInView="visible">
        <p>©2023 Jerrell Marvel</p>
      </motion.div>
    </div>
  );
};

export default Footer;
