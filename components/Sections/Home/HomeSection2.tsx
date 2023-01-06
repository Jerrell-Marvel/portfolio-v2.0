import HomeSection from "./HomeSection";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

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

  const h1Text = "Hello my name is Jerrell Marvel";
  const h2Text = "web developer";
  const h3Text = "Portfolio";

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
      // y: 0,

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
      scale: 1.2,
      opacity: 0,
    },
    visible: {
      filter: "blur(0px)",
      scale: 1,
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

  const { scrollYProgress } = useScroll();

  const scale = useSpring(1);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      scale.set(1 + latest * 2);
    });
    // return unsubscribeY();
  }, []);
  return (
    <div className="bg-slate-700 border-b-[1px] border-slate-700">
      <motion.div
        className="grid-cols-1 grid md:grid-cols-home-lg text-white gap-[1px]"
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
          <motion.img src="/800x400.jpg" alt="main-bg" className="w-full" variants={imgVariants} initial="hidden" animate="visible" style={{ scale }} />
        </motion.div>

        <div className="flex items-center bg-main-black sm:p-8 md:p-12 justify-center p-4">
          <motion.div variants={typingContainerVariants} initial="hidden" animate="visible" className="text-center">
            {h1Text.split("").map((char, i) => {
              return (
                <motion.span key={`h1${char}${i}`} className="md:text-5xl font-extrabold mb-3 text-xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent uppercase" variants={typingVariants}>
                  {char}
                </motion.span>
              );
            })}
          </motion.div>
          {/* <motion.h1 className="md:text-5xl font-extrabold text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">web developer</motion.h1> */}
        </div>

        <div className="bg-main-black md:p-12 p-4 sm:p-8 flex justify-center flex-col text-center">
          <motion.div variants={typingContainerVariants} initial="hidden" animate="visible">
            {h2Text.split("").map((char, i) => {
              return (
                <motion.span key={`h2${char}${i}`} className="md:text-5xl font-extrabold mb-3 text-xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent uppercase" variants={typingVariants}>
                  {char}
                </motion.span>
              );
            })}
            {/* <h2 className="md:text-2xl font-extrabold mb-3 text-xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Lorem ipsum dolor sit amet.</h2> */}

            {/* <motion.p variants={blurVariants} transition={{ duration: 1 }} className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam non inventore eum, enim alias aliquid veniam ea molestias earum harum est perferendis. Amet modi totam rem id nulla placeat, suscipit debitis hic. Quo, animi in.
              Voluptatum, quisquam aliquid animi nam, obcaecati a blanditiis temporibus quia atque similique sapiente est neque.
            </motion.p> */}
          </motion.div>
        </div>

        <div className="flex justify-center items-center bg-main-black md:p-12 p-4 sm:p-8">
          <motion.div variants={typingContainerVariants} initial="hidden" animate="visible" className="text-center">
            {h3Text.split("").map((char, i) => {
              return (
                <motion.span key={`h1${char}${i}`} className="md:text-5xl font-extrabold mb-3 text-xl bg-gradient-to-r text-white" variants={typingVariants}>
                  {char}
                </motion.span>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeSection2;
