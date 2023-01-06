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

const skillsLogo = [
  { name: "HTML", img: "html.png" },
  { name: "CSS", img: "css.png" },
  { name: "Javascript", img: "javascript.png" },
  { name: "Typescript", img: "typescript.svg" },
  { name: "SASS", img: "sass.png" },
  { name: "TailwindCSS", img: "tailwind.png" },
  { name: "React", img: "react.png" },
  { name: "React Query", img: "react-query.png" },
  { name: "Node.js", img: "nodejs.png" },
  { name: "Express.js", img: "expressjs.png" },
  { name: "mongoDB", img: "mongodb.png" },
  { name: "Mongoose", img: "mongoose.png" },
  { name: "Framer Motion", img: "framer-motion.png" },
  { name: "Figma", img: "figma.png" },
  { name: "Next.js", img: "nextjs.png" },
];
const SkillsSection2 = () => {
  return (
    <>
      <section className="overflow-hidden relative">
        <div className="px-12 pt-8 md:pt-16">
          {/* <motion.h4 className="text-[200px] uppercase leading-none opacity-25 !text-white" variants={h4Variants} initial="hidden" whileInView="visible">
            skills
          </motion.h4> */}
          <motion.div className="flex flex-wrap gap-16 items-center justify-center pt-8 pb-16" variants={containerVariants} initial="hidden" whileInView="visible">
            <motion.h5
              className="text-5xl sm:text-7xl md:text-9xl leading-none text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent text-center w-full"
              variants={logoVariants}
              // initial="hidden"
              // whileInView="visible"
            >
              Skills
            </motion.h5>
            {skillsLogo.map((logo, i) => {
              return (
                <motion.div variants={logoVariants} key={i}>
                  <motion.div whileHover="hover" className="grayscale flex flex-col items-center w-[62px] md:w-[124px]" variants={logoWrapperVariants}>
                    <div className="h-[62px] w-[62px] relative md:h-[124px] md:w-[124px]">
                      <Image fill src={`/${logo.img}`} alt={logo.name} className="object-contain w-full aspect-square" />
                    </div>
                    <p className="text-center mt-4 font-semibold text-xl">{logo.name}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection2;
