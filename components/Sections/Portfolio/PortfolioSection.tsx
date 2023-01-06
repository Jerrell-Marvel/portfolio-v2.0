import { motion } from "framer-motion";
import PortfolioItem from "../../PortfolioItem/PortfolioItem";

const sectionVariants = {};

const h3Variants = {
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

const PortfolioSection = () => {
  return (
    <motion.section className="overflow-hidden relative" variants={sectionVariants} whileInView="visible" initial="hidden">
      <div className="px-12">
        <div className="flex flex-col gap-10 md:gap-20">
          <motion.h3 className="text-5xl sm:text-7xl md:text-9xl leading-none text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent text-center w-full" variants={h3Variants}>
            Portfolio
          </motion.h3>
          <PortfolioItem direction="left" />
          <PortfolioItem direction="right" />
          <PortfolioItem direction="left" />
          <PortfolioItem direction="right" />
          <PortfolioItem direction="left" />
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
