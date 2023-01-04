import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const logoVariants = {
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
const SkillsSection = () => {
  return (
    <section className="grid sm:grid-cols-sticky-lg bg-main-black grid-cols-sticky">
      <div className="sticky top-0 flex max-h-screen items-center justify-center w-full">
        <h5 className="font-bold text-2xl -rotate-90 sm:text-4xl sm:rotate-0">skills</h5>

        <div className="line-vertical h-full w-[1px] right-0 absolute"></div>
      </div>
      <motion.div className="flex flex-wrap gap-16 justify-center min-h-screen pt-20 px-4" variants={containerVariants} initial="hidden" whileInView="visible">
        {[...Array(15)].map((e) => {
          return (
            <motion.div variants={logoVariants} key={e}>
              <div className="h-[62px] w-[72px] relative">
                <Image fill src="/react-logo.png" alt="react" className="grayscale" />
              </div>
              <p className="text-center mt-4 font-semibold text-xl">React</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
