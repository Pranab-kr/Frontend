import { motion } from "motion/react";

const Hover = () => {
  return (
    <div>
      <motion.div
        whileHover={{ backgroundColor: "teal" }}
        whileTap={{ scale: 0.8 }}
        className="box"
      ></motion.div>

      <motion.div
        drag
        whileDrag={{ scale: 0.8 }}
        dragConstraints={{ top: 0, left: 0, right: 300, bottom: 200 }}
        dragDirectionLock="true"
        className="circle"
      ></motion.div>
    </div>
  );
};

export default Hover;
