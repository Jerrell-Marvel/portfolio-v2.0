import { motion } from "framer-motion";
import Image from "next/image";
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

const logoWrapperVariants = {
  hover: {
    scale: 1.1,
    filter: "grayscale(0)",
    transition: {
      type: "spring",
      ease: "easeIn",
      duration: 1,
    },
  },
};

const h4Variants = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      ease: "easeOut",
      stiffness: 50,
    },
  },
};
const SkillsSection2 = () => {
  return (
    <>
      <section className="overflow-hidden relative">
        <div className="px-12 pt-8">
          {/* <motion.h4 className="text-[200px] uppercase leading-none opacity-25 !text-white" variants={h4Variants} initial="hidden" whileInView="visible">
            skills
          </motion.h4> */}
          <motion.div className="flex flex-wrap gap-16 py-20 items-center justify-center" variants={containerVariants} initial="hidden" whileInView="visible">
            <motion.h5
              className="text-5xl sm:text-7xl md:text-9xl leading-none text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent text-center w-full"
              variants={logoVariants}
              // initial="hidden"
              // whileInView="visible"
            >
              Skills
            </motion.h5>
            {[...Array(30)].map((e, i) => {
              return (
                <motion.div variants={logoVariants} key={i}>
                  <motion.div whileHover="hover" className="grayscale flex flex-col items-center" variants={logoWrapperVariants}>
                    <div className="md:h-[62px] md:w-[72px] relative h-[31px] w-[36px]">
                      <Image fill src="/react-logo.png" alt="react" />
                    </div>
                    <p className="text-center mt-4 font-semibold text-xl">React</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="bg-gradient-bottom h-16 left-0 right-0 bottom-0 absolute"></div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection2;
