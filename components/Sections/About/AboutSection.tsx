import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

const pVariants = {
  hidden: {
    // filter: "blur(30px)",
    opacity: 0,
    x: "-50%",
  },
  visible: {
    // filter: "blur(0px)",
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};
const AboutSection = () => {
  const { scrollYProgress } = useScroll();

  const scaleP = useSpring(1);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      scaleP.set(1.05 - latest);
    });
    // return unsubscribeY();
  }, []);
  return (
    <motion.div className="text-center md:text-5xl font-extrabold text-xl md:py-20 px-12 pt-8 overflow-hidden md:pt-16">
      <motion.p variants={pVariants} initial="hidden" whileInView="visible" style={{ scale: scaleP }} className="text-slate-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sequi inventore impedit officiis id error exercitationem! Voluptatem in, aspernatur aliquid ipsa temporibus nihil optio quisquam, perspiciatis corrupti ea, enim omnis.
      </motion.p>
      {/* <div></div>

      <div></div> */}
    </motion.div>
  );
};

export default AboutSection;
