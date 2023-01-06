import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import HomeSection from "../components/Sections/Home/HomeSection";
import HomeSection2 from "../components/Sections/Home/HomeSection2";
import SkillsSection from "../components/Sections/Skills/SkillsSection";
import { motion } from "framer-motion";
import ParallaxText from "../components/ParralaxText/ParralaxText";
import SkillsSection2 from "../components/Sections/Skills/SkillsSection2";
import AboutSection from "../components/Sections/About/AboutSection";
import Test from "../components/Test";
import HomeSection3 from "../components/Sections/Home/HomeSection3";
import Test2 from "../components/Test2";
import PortfolioSection from "../components/Sections/Portfolio/PortfolioSection";

const inter = Inter({ subsets: ["latin"] });

const blurBgVariants = {
  hidden: {
    filter: "blur(50px)",
  },

  visible: {
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
export default function Home() {
  return (
    <>
      <Head>
        <title>Jerrell Marvel | Web Developer</title>
        <meta name="description" content="Jerrell Marvel's personal portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>

      {/* <HomeSection /> */}
      {/* <div className="top-0 left-0 right-0 bottom-0 absolute bg-slate-600 z-10 opacity-50 blur-md"> */}

      {/* <motion.div variants={blurBgVariants} initial="hidden" animate="visible"> */}

      {/* <HomeSection2 /> */}
      <HomeSection3 />

      <AboutSection />

      <div className="pt-8">
        <ParallaxText baseVelocity={-5}>Frontend development</ParallaxText>
        <ParallaxText baseVelocity={5}>Backend development</ParallaxText>
      </div>

      {/* <SkillsSection /> */}
      <SkillsSection2 />
      {/* <div className="w-full h-screen bg-no-repeat bg-[url('/test-img.jpg')] bg-cover"></div> */}

      <PortfolioSection />
      <Test2 />
      {/* <Test /> */}

      {/* <div className="w-full h-[300px] bg-slate-200"></div> */}
      {/* <SkillsSection /> */}
      {/* <div className="w-full h-[600px] bg-main-black"></div> */}
      {/* <div className="w-full h-[3000px] bg-slate-200"></div> */}
      {/* <HomeSection /> */}
      {/* </motion.div> */}
    </>
  );
}
