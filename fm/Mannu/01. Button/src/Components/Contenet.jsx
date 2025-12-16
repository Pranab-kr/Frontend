import { motion } from "motion/react";

const Content = () => {
  return (
    <div
      className="[perspective::1000px] h-screen w-full bg-neutral-950 flex items-center justify-center"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{
          rotateX: 20,
          rotateY: 20,
          boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
          y: -5,
        }}
        whileTap={{ y: 3 }}
        style={{
          translateZ: 100,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="group relative text-neutral-400 bg-black rounded-lg px-12 py-4 shadow-[0px_1px_4px_0px_rgba(225,225,225,0.1)_inset,0px_-1px_2px_0px_rgba(225,225,225,0.1)_inset]"
      >
        <span className="group-hover:text-cyan-500 transition-colors duration-300">
          Click me
        </span>
        <span className="absolute left-1/2 bottom-px -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-0.5 w-3/4"></span>
        <span className="absolute group-hover:opacity-100 opacity-0 transition-opacity duration-300 left-1/2 bottom-px -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-0.5 w-3/4 blur-sm"></span>
      </motion.button>
    </div>
  );
};
export default Content;
