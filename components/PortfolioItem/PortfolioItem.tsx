import { motion } from "framer-motion";
type PortfolioItemPropsType = {
  direction: "left" | "right";
};

const containerVariants = {
  hidden: {
    // x: "-50%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const containerHover = {};

const bgHover = {
  hidden: {
    opacity: 0,
  },
  hover: {
    // opacity: 0.5,

    opacity: 0.75,
  },
};

const textHover = {
  hidden: {
    scale: 0,
    x: "-50%",
    y: "-50%",
  },
  hover: {
    scale: 1,
  },
};
const PortfolioItem = ({ direction }: PortfolioItemPropsType) => {
  return (
    <motion.div
      className={`w-full flex md:items-center flex-col ${direction === "left" ? "md:flex-row" : "md:flex-row-reverse"}`}
      variants={containerVariants}
      whileInView="visible"
      initial="hidden"
      whileHover="hover"
      //   initial={{ x: direction === "left" ? "50%" : "-50%", opacity: 0 }}
      //   viewport={{ amount: 0.8 }}
    >
      <motion.div className="md:w-1/2 w-full relative" variants={containerHover} whileHover="hover" initial="hidden">
        <motion.img src="/bg-landscape.jpg" alt="" />
        <motion.div className="bg-main-black absolute top-0 bottom-0 left-0 right-0 flex items-center" variants={bgHover}></motion.div>

        {/* <div className="flex items-center justify-center absolute top-0 bottom-0 left-0 right-0"> */}
        <motion.p className="text-lg md:text-4xl font-extrabold absolute top-1/2 left-1/2 inline-block" variants={textHover}>
          View Projects
        </motion.p>
        {/* </div> */}
      </motion.div>

      <div className="md:ml-8 mt-6 md:mt-0">
        <h5 className="md:text-5xl font-extrabold text-xl">Jerrell Store</h5>
        <p className="md:text-3xl text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione</p>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
