import { motion } from "framer-motion";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { Url } from "url";
import { projectDetailsType } from "../Sections/Portfolio/PortfolioSection";
type PortfolioItemPropsType = {
  direction: "left" | "right";
  projectDetails: projectDetailsType;
  setProjectDetails: Dispatch<SetStateAction<projectDetailsType | null>>;
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
const PortfolioItem = ({ direction, projectDetails, setProjectDetails }: PortfolioItemPropsType) => {
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
      <motion.div
        className="md:w-2/3 w-full relative cursor-pointer"
        variants={containerHover}
        whileHover="hover"
        initial="hidden"
        onClick={() => {
          setProjectDetails(projectDetails);
        }}
      >
        {/* <Link href={`${link}`} passHref legacyBehavior> */}
        {/* <a> */}
        <motion.img src={projectDetails.images[0]} alt="" />
        <motion.div className="bg-main-black absolute top-0 bottom-0 left-0 right-0 flex items-center" variants={bgHover}></motion.div>

        {/* <div className="flex items-center justify-center absolute top-0 bottom-0 left-0 right-0"> */}
        <motion.p className="text-lg md:text-4xl font-extrabold absolute top-1/2 left-1/2 inline-block" variants={textHover}>
          View Projects
        </motion.p>
        {/* </a> */}
        {/* </Link> */}

        {/* </div> */}
      </motion.div>

      <div className={`${direction === "left" ? "md:ml-8" : "md:mr-8"} mt-3 md:mt-0 md:w-1/3`}>
        <h5 className="md:text-5xl font-extrabold text-xl">{projectDetails.title}</h5>
        <p className="md:text-1xl text-base text-slate-500">{projectDetails.description}</p>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
