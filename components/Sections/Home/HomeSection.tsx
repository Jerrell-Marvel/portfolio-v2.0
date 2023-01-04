import Image from "next/image";
import { motion, useSpring } from "framer-motion";
import React from "react";

const h1 = "jerrell marvel";
const h2 = "web developer";

const bgImgVariants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: 0,
    height: "0",
    transition: {
      type: "tween",
      ease: "easeOut",
      height: {
        duration: 0.6,
        delay: 0.9,
      },
      delay: 0.3,
      duration: 0.6,
    },
  },
};

const imgVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.9,
    },
  },
};

const spanVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const headingVariants = {
  visible: {
    transition: {
      delay: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const HomeSection = () => {
  const x = useSpring(0);
  const y = useSpring(0);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    x.set(e.pageX / -35);
    y.set(e.pageY / -35);
  };
  return (
    <div
      className="h-screen bg-black py-10 text-white flex flex-col gap-8 items-center justify-between"
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
    >
      <div className="h-[4px] w-full line-blue"></div>

      <motion.div style={{ x, y }} className="w-full h-full flex flex-col items-center justify-evenly px-6 sm:flex-row sm:justify-evenly">
        {/* <div className="w-full">
          <h1 className="text-6xl capitalize text-center">jerrell marvel</h1>
        </div>

        <div className="w-full bg-red-300 h-[50%] flex justify-center">
          <img alt="hero-img" src="/hero-img.jpg" className="h-full"></img>
        </div> */}

        <div>
          <motion.h1 className="text-6xl capitalize text-center" variants={headingVariants} initial="hidden" animate="visible">
            {h1.split("").map((letter) => {
              return (
                <motion.span key={letter} variants={spanVariants}>
                  {letter}
                </motion.span>
              );
            })}
          </motion.h1>
          <motion.h2 className="text-3xl capitalize text-center mt-4" variants={headingVariants} initial="hidden" animate="visible">
            {h2.split("").map((letter) => {
              return (
                <motion.span key={letter} variants={spanVariants}>
                  {letter}
                </motion.span>
              );
            })}
          </motion.h2>
        </div>

        <div className="w-[300px] h-[300px] relative overflow-hidden">
          <motion.div className="w-full h-full bg-red-400" variants={imgVariants} animate="visible" initial="hidden"></motion.div>
          <motion.div className="w-full h-full bg-blue-400 absolute top-0 opacity-70" variants={bgImgVariants} animate="visible" initial="hidden"></motion.div>
        </div>
      </motion.div>

      <div className="h-[4px] w-full line-blue"></div>
    </div>
  );
};

export default HomeSection;
