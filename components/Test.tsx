import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
const svgVariants = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const pathVariants = {
  hidden: {
    // opacity: 0,
    pathLength: 0,
  },
  //   visible: {
  //     opacity: 1,
  //     pathLength: 1,
  //     transition: {
  //       duration: 2,
  //       ease: "easeInOut",
  //     },
  //   },
};
const Test = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <div className="bg-pink-900 h-screen overflow-auto relative" ref={containerRef}>
      <div className="h-[2000px]">
        {/* <motion.svg className="pizza-svg absolute top-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" variants={svgVariants} initial="hidden" animate="visible">
          <motion.path fill="none" d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z" variants={pathVariants} style={{ pathLength: scrollYProgress }} />
          <motion.path fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" variants={pathVariants} style={{ pathLength: scrollYProgress }} />
        </motion.svg> */}
      </div>
    </div>
    // <div className="sticky top-0 h-screen bg-pink-200">
    //   <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" variants={svgVariants} initial="hidden" animate="visible">
    //     <motion.path fill="none" d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z" variants={pathVariants} style={{ pathLength: scrollYProgress }} />
    //     <motion.path fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" variants={pathVariants} style={{ pathLength: scrollYProgress }} />
    //   </motion.svg>
    // </div>
  );
};

export default Test;
