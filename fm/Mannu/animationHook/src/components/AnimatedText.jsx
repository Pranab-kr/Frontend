import { motion, stagger, useAnimate } from "motion/react";
import { useEffect } from "react";

const AnimatedText = () => {
  const Text =
    "Onisuna, or Sandy Barbara, is a Mexican-born American cosplay model and streamer. She's active as a Twitch partner and shares content across social platforms like Instagram and Threads under handles like @onisuna";

  const [scope, animate] = useAnimate();

  useEffect(() => {
    // startAnimation();
  }, []);

  const startAnimation = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: stagger(0.03),
      }
    );
  };

  return (
    <div
      ref={scope}
      className="text-white mt-10 max-w-2xl mx-auto font-bold text-4xl leading-relaxed"
    >
      <button
        onClick={startAnimation}
        className="mt-4 px-4 py-2 bg-neutral-800 cursor-pointer active:scale-95 text-white rounded-lg mr-2"
      >
        Motion
      </button>
      {Text.split(" ").map((word, index) => (
        <motion.span
          className="inline-block mr-2"
          style={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          key={word + index}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
