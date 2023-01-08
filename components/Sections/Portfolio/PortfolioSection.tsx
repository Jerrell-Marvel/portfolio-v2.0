import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PortfolioItem from "../../PortfolioItem/PortfolioItem";
import Image from "next/image";

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

const detailContainerVariants = {
  hidden: {
    x: "-100%",
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.4,
    },
  },

  visible: {
    x: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

export type projectDetailsType = {
  title: String;
  description: String;
  images: string[];
  createdWith: string[];
};

const textVariants = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },

  visible: {
    transition: {
      type: "spring",
      ease: "easeOut",
      duration: 0.4,
      stiffness: 200,
      damping: 25,
      restDelta: 0.001,
    },
    opacity: 1,
    x: 0,
  },
};

const imgVariants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },

  visible: {
    transition: {
      type: "spring",
      stiffness: 50,
      ease: "easeOut",
      duration: 0.4,
    },
    opacity: 1,
    y: 0,
  },
};

const projects = [
  {
    title: "Jerrell Store",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sed aspernatur quod, saepe dicta quis eveniet debitis vel? Odio, vitae rerum illum velit doloremque, corrupti accusantium cum neque ut voluptatum esse",
    images: ["bg-landscape2.jpg", "bg-landscape2.jpg", "bg-landscape2.jpg", "bg-landscape2.jpg", "bg-landscape2.jpg", "bg-landscape2.jpg"],
    createdWith: ["React", "TailwindCSS", "React Query", "Express.js", "MongoDB", "Mongoose"],
  },
  {
    title: "Jerrell Store 2",
    description: "uvuvuivxuovuixouvox ossas",
    images: ["bg-landscape2.jpg", "bg-landscape2.jpg", "bg-landscape2.jpg", "bg-landscape2.jpg", "bg-landscape2.jpg", "bg-landscape2.jpg"],
    createdWith: ["React", "TailwindCSS", "React Query", "Express.js", "MongoDB", "Mongoose"],
  },
  {
    title: "Jerrell Store 3",
    description: "uvuvuivxuovuixouvox ossas",
    images: ["bg-landscape2.jpg", "bg-landscape2.jpg", "bg-landscape2.jpg", "bg-landscape2.jpg", "bg-landscape2.jpg", "bg-landscape2.jpg"],
    createdWith: ["React", "TailwindCSS", "React Query", "Express.js", "MongoDB", "Mongoose"],
  },
  {
    title: "Jerrell Store 4",
    description: "uvuvuivxuovuixouvox ossas",
    images: ["bg-landscape2.jpg", "bg-landscape2.jpg", "bg-landscape2.jpg", "bg-landscape2.jpg", "bg-landscape2.jpg", "bg-landscape2.jpg"],
    createdWith: ["React", "TailwindCSS", "React Query", "Express.js", "MongoDB", "Mongoose"],
  },
];

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [projectDetails, setProjectDetails] = useState<projectDetailsType | null>(null);
  return (
    <div>
      <motion.section className="overflow-hidden relative" variants={sectionVariants} whileInView="visible" initial="hidden">
        <div className="px-12">
          <div className="flex flex-col gap-10 md:gap-20">
            <motion.h3 className="text-5xl sm:text-7xl md:text-9xl leading-none text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent text-center w-full" variants={h3Variants}>
              Portfolio
            </motion.h3>
            {projects.map((project, i) => {
              return <PortfolioItem key={project.title} direction={(i + 1) % 2 === 0 ? "right" : "left"} projectDetails={project} setProjectDetails={setProjectDetails} />;
            })}

            {/* <PortfolioItem direction="right" link="/jerrell-store" />
          <PortfolioItem direction="left" link="/jerrell-store" />
          <PortfolioItem direction="right" link="/jerrell-store" />
          <PortfolioItem direction="left" link="/jerrell-store" /> */}

            <AnimatePresence>
              {projectDetails ? (
                <motion.div className="h-screen w-full bg-main-black fixed top-0 left-0 right-0 z-[9999] overflow-y-auto px-12 pt-8 md:pt-16" initial="hidden" animate="visible" variants={detailContainerVariants} exit="hidden">
                  <motion.div
                    onClick={() => {
                      setProjectDetails(null);
                    }}
                    className="text-white flex justify-end"
                    variants={textVariants}
                  >
                    <Image src="/close.png" alt="" width={36} height={36} className="cursor-pointer" />
                  </motion.div>

                  <motion.h3 className="text-5xl sm:text-7xl mb-4 text-white font-bold sm:mb-6" variants={textVariants}>
                    {projectDetails.title}
                  </motion.h3>
                  <motion.p className="text-lg text-slate-500 mb-4 sm:mb-6" variants={textVariants}>
                    {projectDetails.description}
                  </motion.p>

                  <motion.ul variants={textVariants}>
                    <motion.span className="text-lg text-slate-500" variants={textVariants}>
                      Created With :
                    </motion.span>
                    {projectDetails.createdWith.map((e) => {
                      return (
                        <li className="text-lg text-slate-500" key={e}>
                          {`- ${e}`}
                        </li>
                      );
                    })}
                  </motion.ul>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 sm:mt-8">
                    {projectDetails.images.map((img) => {
                      return <motion.img src={img} alt="" variants={imgVariants} key={img} />;
                    })}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PortfolioSection;
