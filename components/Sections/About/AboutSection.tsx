import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

const pVariants = {
  hidden: {
    // filter: "blur(30px)",
    opacity: 0,
    y: "65%",
  },
  visible: {
    // filter: "blur(0px)",
    opacity: 1,
    y: 0,
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
    <motion.div className="text-center md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-xl md:py-20 px-12 pt-8 overflow-hidden md:pt-16">
      <motion.p variants={pVariants} initial="hidden" whileInView="visible" style={{ scale: scaleP }} className="text-slate-200" viewport={{ once: true }}>
        Hi there! My name is Jerrell Marvel a computer science student at UNPAR. I am extremely passionate about web development and always look for opportunities to expand my knowledge and skills in this field. In my free time, you can
        find me tinkering with new projects or researching the latest trends in web development.
      </motion.p>
      {/* <div></div>

      <div></div> */}
    </motion.div>
  );
};

export default AboutSection;
