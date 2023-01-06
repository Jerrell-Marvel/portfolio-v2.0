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
      duration: 2,
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

const Test2 = () => {
  const { scrollYProgress } = useScroll();

  const scale = useSpring(1);
  const y = useSpring(1);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      scale.set(1 + latest * 5);
      y.set(latest * 1000);
    });
    // return unsubscribeY();
  }, []);
  return (
    <div className="w-full relative overflow-hidden">
      <motion.img src="/bg-landscape2.webp" alt="" className="opacity-20 block bg-fixed" whileInView="visible" variants={imgVariants} />
      <div className="bg-gradient-top absolute top-0 w-full h-1/2 "></div>
      <motion.div variants={h3Variants} whileInView="visible" initial="hidden" className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
        <h3 className="text-5xl sm:text-7xl md:text-9xl leading-none text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent text-center w-full">Portfolio</h3>
      </motion.div>
      <div className="bg-gradient-bottom absolute bottom-0 w-full h-1/2"></div>
    </div>
  );
};

export default Test2;
