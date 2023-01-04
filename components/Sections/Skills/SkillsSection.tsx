import Image from "next/image";
const SkillsSection = () => {
  return (
    <div className="bg-main-black flex flex-wrap gap-16 justify-center">
      {[...Array(10)].map((e) => {
        return (
          <div className="h-32 w-36 relative" key={e}>
            <Image fill src="/react-logo.png" alt="react" />
          </div>
        );
      })}
    </div>
  );
};

export default SkillsSection;
