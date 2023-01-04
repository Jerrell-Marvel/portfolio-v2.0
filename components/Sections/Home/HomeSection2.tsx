import HomeSection from "./HomeSection";
import Image from "next/image";
import { motion, useSpring } from "framer-motion";
import { useRef } from "react";

const HomeSection2 = () => {
  const x = useSpring(0);
  const y = useSpring(0);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    x.set(e.pageX / -50);
    y.set(e.pageY / -50);
  };

  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="bg-slate-700 border-b-[1px] border-slate-700">
      <motion.div
        className="grid-cols-1 grid sm:grid-cols-home-lg text-white gap-[1px] min-h-screen"
        onMouseMove={(e) => {
          handleMouseMove(e);
        }}
      >
        {/* Main image */}
        <div className="bg-main-black relative flex items-center p-8 gap-8" ref={containerRef}>
          <motion.div className="flex gap-3 flex-wrap w-full" style={{ x, y }}>
            <motion.div className="w-36 aspect-square bg-slate-500" drag dragConstraints={containerRef}>
              LOL
            </motion.div>
            <motion.div className="w-36 aspect-square bg-slate-600" drag dragConstraints={containerRef}></motion.div>
            <motion.div className="w-36 aspect-square bg-slate-700" drag dragConstraints={containerRef}></motion.div>
            <motion.div className="w-36 aspect-square bg-slate-800" drag dragConstraints={containerRef}></motion.div>
          </motion.div>

          {/* <div className="w-1/4 h-1/4 bg-pink-200"></div> */}
          {/* <Image src="/hero-img.jpg" fill alt="main-bg" /> */}
        </div>

        <div className="flex items-center sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 bg-main-black p-8">
          <h1 className="sm:text-6xl font-extrabold text-4xl">web developer</h1>
        </div>

        <div className="bg-main-black p-8 flex justify-center flex-col">
          <h2 className="sm:text-2xl font-extrabold mb-3 text-xl">Hello my name is Jerrell Marvel</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam non inventore eum, enim alias aliquid veniam ea molestias earum harum est perferendis. Amet modi totam rem id nulla placeat, suscipit debitis hic. Quo, animi in.
            Voluptatum, quisquam aliquid animi nam, obcaecati a blanditiis temporibus quia atque similique sapiente est neque.
          </p>
        </div>

        <div className="p-8 bg-main-black flex items-center gap-4">
          <h3 className="sm:text-6xl font-extrabold text-4xl">Lorem</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeSection2;
