import Image from "next/image";

const SkillsSection = () => {
  return (
    <section className="grid grid-cols-sticky-lg px-8 bg-main-black">
      <div className="sticky top-0 flex max-h-screen items-center justify-center">
        <h5 className="font-bold text-6xl">skills</h5>

        <div className="line-vertical h-full w-[1px] ml-4"></div>
      </div>
      <div className="flex flex-wrap gap-16 justify-center min-h-screen pt-20">
        {[...Array(15)].map((e) => {
          return (
            <div key={e}>
              <div className="h-[63px] w-[72px] relative">
                <Image fill src="/react-logo.png" alt="react" className="grayscale" />
              </div>
              <p className="text-center mt-4 font-semibold text-xl">React</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
