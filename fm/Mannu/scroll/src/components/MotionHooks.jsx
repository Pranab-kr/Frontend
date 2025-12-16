import {
  useMotionValueEvent,
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
  useSpring,
} from "motion/react";
import { useRef, useState } from "react";
import { TbBrandTabler } from "react-icons/tb";
// import { useScroll } from "motion/react";

const MotionHooks = () => {
  const Maincontainerref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: Maincontainerref,
    offset: ["start end", "end start"],
  });

  const backgrounds = ["#151b25", "#001523", "#11001c"];
  const [background, setBackground] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const finalValue = Math.floor(latest * backgrounds.length);
    if (finalValue < backgrounds.length) {
      setBackground(backgrounds[finalValue]);
    }
    console.log(latest)
    // console.log(finalValue);
  });
  const feature = [
    {
      icon: <TbBrandTabler className="h-8 w-8 text-blue-400" />,
      title: "Generate ultra realistic images in seconds",
      description:
        "With our state of the art AL, you can generate ultra realistic images in",
      content: (
        <div>
          <img
            src="https://simp6.selti-delivery.ru/images3/onisun0ee10d089e8b64df.jpg"
            alt="none"
            className="w-[650px] rounded-lg"
          />
        </div>
      ),
    },
    {
      icon: <TbBrandTabler className="h-8 w-8 text-blue-400" />,
      title: "Create animated avatars instantly",
      description:
        "Transform your photos into animated avatars with a single click.",
      content: (
        <div>
          <img
            src="https://simp6.selti-delivery.ru/images3/onisuna7cd3cd099b834f05.jpg"
            alt="none"
            className="w-[500px] rounded-lg"
          />
        </div>
      ),
    },
    {
      icon: <TbBrandTabler className="h-8 w-8 text-blue-400" />,
      title: "Generate ultra realistic images in seconds",
      description:
        "With our state of the art AL, you can generate ultra realistic images in",
      content: (
        <div>
          <img
            src="https://simp6.selti-delivery.ru/images3/onisun0ee10d089e8b64df.jpg"
            alt="none"
            className="w-[650px] rounded-lg"
          />
        </div>
      ),
    },
    {
      icon: <TbBrandTabler className="h-8 w-8 text-blue-400" />,
      title: "Create animated avatars instantly",
      description:
        "Transform your photos into animated avatars with a single click.",
      content: (
        <div>
          <img
            src="https://simp6.selti-delivery.ru/images3/onisuna7cd3cd099b834f05.jpg"
            alt="none"
            className="w-[500px] rounded-lg"
          />
        </div>
      ),
    },
  ];

  const Card = ({ feature }) => {
    const containerref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerref,
      offset: ["start end", "end start"],
    });

    //for spring animation
    // const translateContent = useSpring(
    //   useTransform(scrollYProgress, [0, 1], [200, -300]),
    //   {
    //     stiffness: 100,
    //     damping: 25,
    //     mass: 1,
    //   }
    // );
    const translateContent =useTransform(scrollYProgress, [0, 1], [200, -300]);
 
    const opacityContent = useTransform(
      scrollYProgress,
      [0, 0.3, 0.5, 1],
      [0, 0.3, 1, 0]
    );
    const blurContent = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
    const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.5]);

    return (
      <div
        ref={containerref}
        className="flex justify-between items-center p-40"
        key={feature.title}
      >
        <motion.div
          style={{
            filter: useMotionTemplate`blur(${blurContent}px)`,
            scale: scale,
          }}
          className="flex flex-col gap-5"
        >
          {feature.icon}
          <h2 className="text-white text-4xl font-bold">{feature.title}</h2>
          <p className="text-neutral-400 text-lg">{feature.description}</p>
        </motion.div>
        <motion.div style={{ y: translateContent, opacity: opacityContent }}>
          {feature.content}
        </motion.div>
      </div>
    );
  };

  return (
    <motion.div
      className="min-h-screen bg-neutral-900 flex items-center justify-center"
      ref={Maincontainerref}
      animate={{
        background,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      <div className="flex flex-col gap-10 max-w-6xl mx-auto py-40">
        {feature.map((feature, idx) => (
          <Card key={idx} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
};

export default MotionHooks;
