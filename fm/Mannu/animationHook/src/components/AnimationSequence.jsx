import { motion, useAnimate, useAnimation } from "motion/react";

const AnimationSequence = () => {
  const [scope, animate] = useAnimate();
  const checkmarkControls = useAnimation();

  const startAnimating = async () => {
    await animate(
      ".Text",
      {
        display: "none",
        opacity: 0,
      },
      {
        duration: 0.1,
      }
    );
    await animate(
      "button",
      {
        width: 0,
        opacity: 0,
      },
      {
        duration: 0.3,
        ease: "easeInOut",
      }
    );

    // Show loader
    await animate(
      ".loader",
      {
        opacity: 1,
        scale: 1,
      },
      {
        duration: 0.2,
        ease: "easeOut",
      }
    );

    // Let loader spin for a bit
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Hide loader
    await animate(
      ".loader",
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 0.2,
        ease: "easeIn",
      }
    );

    await animate(
      ".spin-circle",
      {
        opacity: 1,
        scale: [1, , 1.2, 1, 0.8, 1],
      },
      {
        duration: 0.5,
        // ease: "easeInOut",
      }
    );

    // Animate the checkmark path drawing
    setTimeout(() => {
      checkmarkControls.start({
        pathLength: 1,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      });
    }, 50);
  };
  return (
    <div
      ref={scope}
      className="relative w-screen h-20 flex justify-center mt-40"
    >
      <motion.button
        onClick={startAnimating}
        style={{
          width: "30rem",
        }}
        className="h-20 rounded-xl bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500 font-medium cursor-pointer mx-auto text-white"
      >
        <span className="Text">Purchase ($9.99)</span>
      </motion.button>

      {/* Loader SVG */}
      <motion.svg
        className="loader h-8 w-8 absolute inset-0 m-auto"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0, scale: 0 }}
      >
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="60"
          strokeDashoffset="60"
          animate={{
            rotate: 360,
            strokeDashoffset: [60, 0, 60],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.svg>

      <motion.div
        style={{ opacity: 0, scale: 0 }}
        className="spin-circle h-20 w-20 rounded-full bg-green-500 absolute inset-0 m-auto"
      ></motion.div>

      {/* Custom SVG Checkmark for pathLength animation */}
      <motion.svg
        className="checkmark h-12 w-12 z-50 pointer-events-none absolute inset-0 m-auto"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 100 }}
      >
        <motion.path
          d="M20 50 L40 70 L80 30"
          stroke="#ffffff"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={checkmarkControls}
        />
      </motion.svg>
    </div>
  );
};

export default AnimationSequence;
