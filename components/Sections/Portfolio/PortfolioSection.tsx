import { motion } from "framer-motion";
import PortfolioItem from "../../PortfolioItem/PortfolioItem";

const PortfolioSection = () => {
  return (
    <section className="overflow-hidden relative">
      <div className="px-12 pt-8">
        <div className="flex flex-col gap-10 md:gap-20">
          <PortfolioItem direction="left" />
          <PortfolioItem direction="right" />
          <PortfolioItem direction="left" />
          <PortfolioItem direction="right" />
          <PortfolioItem direction="left" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
