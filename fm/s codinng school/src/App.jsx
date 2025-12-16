import { motion } from "motion/react";
import Hover from "./Components/Hover";
import Scroll from "./Components/Scroll";

const App = () => {
  return (
    <div>
      {/* keyframe animation */}
      {/* <motion.div
        animate={{ x: [0, 800, 800, 0, 0], y: [0, 0, 300, 300, 0], rotate: [0, 360,0,-360,0] }}
        transition={{ duration: 2, delay: 1, ease: "easeIn" }}
        className="box"
      /> */}

      {/* Basic animation */}
      {/* <motion.div
        animate={{ x: 500, y: 100, rotate: 200 }}
        transition={{ duration: 2, delay: 1 }}
        className="box"
      /> */}

      {/* noraml animation with transition */}
      {/* <motion.div
        initial={{ x: 1000, y: 300 }}
        animate={{ x: 100, y: -100, scale: 0.5 }}
        transition={{ duration: 2, repeat: 2, ease: "anticipate" }}
        className="circle"
      /> */}

      
      {/* <Hover /> */}

      <Scroll />
    </div>
  );
};

export default App;
