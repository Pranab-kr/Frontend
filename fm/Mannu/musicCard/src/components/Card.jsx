import { useState } from "react";
import { motion } from "motion/react";

const Card = () => {
  const AllCards = [
    {
      description: "Lana Del Rey",
      title: "Summertime Sadness",
      src: "https://simp6.selti-delivery.ru/images3/onisun0ee10d089e8b64df.jpg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p className="text-[10px] text-neutral-500">
            Lana Del Rey, an iconic American singer-songwriter, is celebrated
            for her melancholic and cinematic music style. Born Elizabeth
            Woolridge Grant in New York City, she has captivated audiences
            worldwide with her haunting voice and introspective lyrics. <br />{" "}
            <br /> Her songs often explore themes of tragic romance, glamour,
            and melancholia, drawing inspiration from both contemporary and
            vintage pop culture. With a career that has seen numerous critically
            acclaimed albums, Lana Del Rey has established herself as a unique
            and influential figure in the music industry, earning a dedicated
            fan base and numerous accolades.
          </p>
        );
      },
    },
    {
      description: "Taylor Swift",
      title: "Anti-Hero",
      src: "https://simp6.selti-delivery.ru/images3/onisuna7cd3cd099b834f05.jpg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p className="text-[10px] text-neutral-500">
            Taylor Swift is a globally renowned singer-songwriter known for her
            narrative songwriting and genre versatility. From country roots to
            pop stardom and indie folk exploration, she has consistently
            reinvented her sound while maintaining her distinctive storytelling
            ability. <br /> <br />
            Her music often draws from personal experiences, creating relatable
            anthems that resonate with millions of fans worldwide. With multiple
            Grammy Awards and record-breaking albums, Taylor Swift continues to
            shape the modern music landscape. <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos laborum consequatur iusto minus sit cumque nostrum. Fugit, sit consequuntur.
          </p>
        );
      },
    },
    {
      description: "The Weeknd",
      title: "Blinding Lights",
      src: "https://simp6.selti-delivery.ru/images3/2025-06-21_at_16-08_id_792900120562638848_hash2_a3a57431629a90d35a49d92c8e3dc2998d186f389c36de5e9b69c93cac3478f6b095e74624f6dd2a.jpg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p className="text-[10px] text-neutral-500">
            The Weeknd, born Abel Tesfaye, is a Canadian singer known for his
            distinctive falsetto and dark, atmospheric R&B sound. His music
            blends elements of pop, R&B, and electronic music, creating a unique
            sonic landscape that has captivated audiences globally. <br />{" "}
            <br />
            From his mysterious mixtape beginnings to mainstream success, The
            Weeknd has consistently pushed creative boundaries, earning critical
            acclaim and commercial success with his innovative approach to
            contemporary music.
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et obcaecati facilis expedita recusandae officiis eius eos ipsum! Doloremque, nulla incidunt.
          </p>
        );
      },
    },
    {
      description: "Billie Eilish",
      title: "Bad Guy",
      src: "https://simp6.selti-delivery.ru/images3/601510df8d9091b1083db.jpg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p className="text-[10px] text-neutral-500">
            Billie Eilish is a groundbreaking artist who has redefined pop music
            with her ethereal vocals, innovative production, and unique visual
            aesthetic. At a young age, she has achieved remarkable success,
            challenging conventional pop norms with her introspective lyrics.{" "}
            <br /> <br />
            Her collaboration with brother Finneas has produced critically
            acclaimed albums that explore themes of mental health, fame, and
            growing up in the digital age, making her a voice for a new
            generation.
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto fugiat tempore reiciendis nostrum sequi consectetur nulla consequatur iure ea adipisci?
          </p>
        );
      },
    },
    {
      description: "Dua Lipa",
      title: "Levitating",
      src: "https://simp6.jpg5.su/images3/16d34e810aaa39d2c1.jpg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p className="text-[10px] text-neutral-500">
            Dua Lipa is a British-Albanian singer who has become one of pop
            music's brightest stars with her disco-influenced sound and powerful
            vocals. Her music combines retro elements with modern production,
            creating infectious dance anthems that dominate charts worldwide.{" "}
            <br /> <br />
            With multiple Grammy wins and platinum albums, Dua Lipa continues to
            evolve her sound while maintaining the danceable energy that has
            made her a global phenomenon in contemporary pop music.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsam eligendi corporis deleniti, odio autem. Cupiditate culpa nesciunt praesentium repudiandae.
          </p>
        );
      },
    },
  ];

  const [current, setCurrent] = useState(null);

  return (
    <div className="py-20 bg-gray-100 min-h-screen relative">
      {current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setCurrent(null)}
          className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur"
        ></motion.div>
      )}
      {current && (
        <motion.div
          layoutId={`card-${current.title}`}
          className="h-[600px] w-72 rounded-xl fixed inset-0 z-20 m-auto bg-white border border-neutral-200 p-4"
        >
          <motion.img
            layoutId={`card-image-${current.title}`}
            src={current.src}
            alt={current.title}
            className="w-full aspect-square rounded-xl object-cover object-center"
          />
          <div className="flex flex-col items-start pt-4 justify-between">
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col items-start gap-1">
                <motion.h2
                  layoutId={`card-h2-${current.title}`}
                  className="font-bold text-xs tracking-tight text-black"
                >
                  {current.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-p-${current.title}`}
                  className="text-[10px] pb-2 text-neutral-500"
                >
                  {current.description}
                </motion.p>
              </div>
              <motion.div layoutId={`card-cta-${current.title}`}>
                <a
                  layoutId={`card-cta-${current.title}`}
                  href={current.link}
                  className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
                >
                  {current.ctaText}
                </a>
              </motion.div>
            </div>
            <motion.div
              initial={{
                filter: "blur(10px)",
                opacity: 0,
              }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="h-64 overflow-auto pb-20 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"
            >
              {current.content()}
            </motion.div>
          </div>
        </motion.div>
      )}
      <div className="max-w-lg mx-auto flex flex-col gap-10">
        {AllCards.map((card, idx) => (
          <motion.button
            layoutId={`card-${card.title}`}
            className="p-4 rounded-lg bg-white border border-neutral-200 items-center flex justify-between cursor-pointer"
            onClick={() => setCurrent(card)}
            key={idx}
          >
            <div className="flex gap-4 items-center">
              <motion.img
                layoutId={`card-image-${card.title}`}
                src={card.src}
                alt={card.title}
                className="h-20 aspect-square rounded-xl object-cover object-center"
              />

              <div className="flex flex-col items-start gap-1">
                <motion.h2
                  layoutId={`card-h2-${card.title}`}
                  className="font-bold text-xs tracking-tight text-black"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-p-${card.title}`}
                  className="text-[10px] text-neutral-500"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.div
              layoutId={`card-cta-${card.title}`}
              className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
            >
              {card.ctaText}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Card;
