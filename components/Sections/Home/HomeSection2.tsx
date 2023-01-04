import HomeSection from "./HomeSection";
import Image from "next/image";
import { motion } from "framer-motion";

const HomeSection2 = () => {
  return (
    <div className="bg-slate-700 border-b-[1px] border-slate-700">
      <div className="grid-cols-1 grid sm:grid-cols-home-lg text-white gap-[1px]">
        {/* Main image */}
        <div className="bg-main-black h-72 sm:h-96 relative"></div>

        <div className="flex items-center sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 bg-main-black">
          <h1 className="text-6xl font-extrabold p-8">web developer</h1>
        </div>

        <div className="bg-main-black p-8 flex justify-center flex-col">
          <h2 className="text-2xl font-extrabold mb-3   ">Hello my name is Jerrell Marvel</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam non inventore eum, enim alias aliquid veniam ea molestias earum harum est perferendis. Amet modi totam rem id nulla placeat, suscipit debitis hic. Quo, animi in.
            Voluptatum, quisquam aliquid animi nam, obcaecati a blanditiis temporibus quia atque similique sapiente est neque.
          </p>
        </div>

        <div className="p-8 bg-main-black flex items-center gap-4">
          <h3 className="text-6xl font-extrabold">Lorem</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
