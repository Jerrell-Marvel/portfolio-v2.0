import { useScroll, useSpring } from "framer-motion";
import { motion } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  //   useEffect(() => {
  //     return scrollYProgress.onChange((latest) => {
  //       scaleP.set(1.05 - latest);
  //     });
  //     // return unsubscribeY();
  //   }, []);

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return <motion.div className="top-0 w-1 bg-blue-900 fixed h-full z-50 right-0 bottom-0 origin-top rounded-full" style={{ scaleY }}></motion.div>;
};

export default ProgressBar;
