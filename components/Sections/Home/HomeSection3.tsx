import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";
const h1Text = "Jerrell Marvel";
const h2Text = "Web Developer";
import heroImg from "../../../public/hero-img.jpg";
import Image from "next/legacy/image";

const typingContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.115,
    },
  },
};

const typingVariants = {
  hidden: {
    opacity: 0,
    y: "200px",
  },
  visible: {
    // y: 0,
    // y: 0,
    opacity: 1,
  },
};

const bgImgVariants = {
  hidden: {
    y: "120%",
  },
  visible: {
    y: 0,
    height: "0",
    transition: {
      type: "tween",
      ease: "easeOut",
      height: {
        duration: 0.6,
        delay: 0.9,
      },
      delay: 0.3,
      duration: 0.6,
    },
  },
};

const imgVariants = {
  hidden: {
    // y: "100%",
    filter: "blur(50px)",
    opacity: 0,
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    // y: 0,
    transition: {
      ease: "easeInOut",
      delay: 0.9,
      duration: 0.9,
    },
  },
};
const HomeSection3 = () => {
  //   const { scrollYProgress } = useScroll();

  //   const scale = useSpring(1);
  //   const y = useSpring(1);

  //   useEffect(() => {
  //     return scrollYProgress.onChange((latest) => {
  //       scale.set(1 + latest);
  //       y.set(latest * 1000);
  //     });
  //     // return unsubscribeY();
  //   }, []);
  return (
    <>
      <div></div>
      <section className="overflow-hidden">
        <div className="px-12 pt-8 md:pt-16">
          <div className="flex flex-col items-center sm:flex-row">
            <div className="w-full flex-col justify-center sm:flex sm:pr-4 md:pr-6 lg:pr-8 sm:w-1/2">
              <motion.div variants={typingContainerVariants} initial="hidden" whileInView="visible" className="mb-4">
                {h1Text.split("").map((char, i) => {
                  return (
                    <motion.span key={`h1${char}${i}`} className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent" variants={typingVariants}>
                      {char}
                    </motion.span>
                  );
                })}
              </motion.div>
              {/* <h1 className="text-5xl sm:text-7xl md:text-9xl text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-2">Jerrell Marvel</h1> */}

              <motion.div variants={typingContainerVariants} initial="hidden" whileInView="visible" className="mb-4">
                {h2Text.split("").map((char, i) => {
                  return (
                    <motion.span key={`h1${char}${i}`} className="md:text-3xl lg:text-5xl text-xl text-slate-500" variants={typingVariants}>
                      {char}
                    </motion.span>
                  );
                })}
              </motion.div>
              {/* <h2 className="md:text-5xl text-xl text-slate-500">Lorem, ipsum dolor.</h2> */}
              {/* <p className="mb-4 text-slate-500 md:text-lg lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod at cupiditate perferendis ex pariatur minus cumque? Incidunt itaque repudiandae fuga ab
                illo suscipit sint cum sequi voluptates quia quo, possimus vel hic sunt accusamus amet quae iste beatae impedit voluptate.
              </p> */}
              {/* <Link to="/">
                <button className="my-4 w-full border-2 border-black bg-primary py-4 uppercase text-white transition-colors duration-300 hover:bg-white hover:text-black">start shopping</button>
              </Link> */}
            </div>

            <motion.div className="h-full w-full sm:ml-4 md:ml-6 lg:ml-8 relative sm:w-1/2" variants={imgVariants} whileInView="visible" initial="hidden">
              <Image
                alt="hero-img"
                src={heroImg}
                className="mx-auto max-w-full"
                // style={{ scale }}
                width={700}
                height={700}
                layout="responsive"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeSection3;
