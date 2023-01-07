import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const bgVariants = {
  // hidden: {
  //   width: "0%",
  // },
  exit: {
    width: ["0%", "100%"],
    x: "100%",
    transition: {
      x: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeInOut",
      },
      duration: 0.5,
    },
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div className="bg-blue-900 fixed top-0 bottom-0 z-[999]" key={router.route} initial="hidden" exit="exit" variants={bgVariants}></motion.div>

      <motion.div exit={{ opacity: 0 }} transition={{ duration: 2 }} initial={{ opacity: 1 }} key={router.route}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
