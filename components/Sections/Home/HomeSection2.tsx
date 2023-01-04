import HomeSection from "./HomeSection";
import Image from "next/image";
import { motion, useSpring } from "framer-motion";
import { useRef } from "react";

const HomeSection2 = () => {
  // const x = useSpring(0);
  // const y = useSpring(0);

  // const xPositive = useSpring(0);
  // const yPositive = useSpring(0);
  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   x.set(e.pageX / -50);
  //   y.set(e.pageY / -50);

  //   xPositive.set(e.pageX / 50);
  //   yPositive.set(e.pageY / 50);
  // };

  const h2Text = "Lorem ipsum dolor sit amet.";
  const h1Text = "web developer";

  const typingContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.05,
      },
    },
  };

  const typingVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const blurVariants = {
    hidden: {
      filter: "blur(50px)",
    },
    visible: {
      filter: "blur(0px)",
    },
  };

  const imgVariants = {
    hidden: {
      filter: "blur(50px)",
      rotate: -30,
      scale: 1.2,
      opacity: 0,
    },
    visible: {
      filter: "blur(0px)",
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const h3Variants = {
    hidden: {
      filter: "blur(50px)",
      // rotate: 30,
      // scale: 0,
      opacity: 0,
    },
    visible: {
      filter: "blur(0px)",
      // scale: 1,
      // rotate: 0,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="bg-slate-700 border-b-[1px] border-slate-700">
      <motion.div
        className="grid-cols-1 grid md:grid-cols-home-lg text-white gap-[1px] min-h-screen"
        // onMouseMove={(e) => {
        //   handleMouseMove(e);
        // }}
      >
        {/* Main image */}
        <motion.div className="bg-main-black relative flex items-center overflow-hidden" ref={containerRef}>
          {/* <motion.div className="flex flex-wrap sm:w-full sm:h-full" style={{ x, y }}>
            <motion.div className="w-1/4 bg-slate-500" drag dragConstraints={containerRef}></motion.div>
            <motion.div className="w-1/4 bg-slate-600" drag dragConstraints={containerRef}></motion.div>
            <motion.div className="w-1/4 bg-slate-700" drag dragConstraints={containerRef}></motion.div>
            <motion.div className="w-1/4 bg-slate-800" drag dragConstraints={containerRef}></motion.div>
          </motion.div> */}

          {/* <img src="/test.webp" alt="" /> */}

          {/* <div className="w-1/4 h-1/4 bg-pink-200"></div> */}
          <motion.img src="/800x400.jpg" alt="main-bg" className="w-full" variants={imgVariants} initial="hidden" animate="visible" />
        </motion.div>

        <div className="flex items-center md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 bg-main-black p-12">
          <motion.div variants={typingContainerVariants} initial="hidden" animate="visible">
            {h1Text.split("").map((char) => {
              return (
                <motion.span key={char} className="md:text-5xl font-extrabold mb-3 text-xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent" variants={typingVariants}>
                  {char}
                </motion.span>
              );
            })}
          </motion.div>
          {/* <motion.h1 className="md:text-5xl font-extrabold text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">web developer</motion.h1> */}
        </div>

        <div className="bg-main-black p-12 flex justify-center flex-col">
          <motion.div variants={typingContainerVariants} initial="hidden" animate="visible">
            {h2Text.split("").map((char) => {
              return (
                <motion.span key={char} className="md:text-2xl font-extrabold mb-3 text-xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent" variants={typingVariants}>
                  {char}
                </motion.span>
              );
            })}
            {/* <h2 className="md:text-2xl font-extrabold mb-3 text-xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Lorem ipsum dolor sit amet.</h2> */}
            <motion.p variants={blurVariants} transition={{ duration: 1 }} className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam non inventore eum, enim alias aliquid veniam ea molestias earum harum est perferendis. Amet modi totam rem id nulla placeat, suscipit debitis hic. Quo, animi in.
              Voluptatum, quisquam aliquid animi nam, obcaecati a blanditiis temporibus quia atque similique sapiente est neque.
            </motion.p>
          </motion.div>
        </div>

        <div className="p-12 bg-main-black flex items-center gap-4 ">
          <motion.h3 className="md:text-5xl font-extrabold text-4xl" variants={h3Variants} initial="hidden" animate="visible" transition={{ delay: 2 }}>
            Lorem
          </motion.h3>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeSection2;
