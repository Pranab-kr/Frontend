"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { title: "Home", link: "#" },
    { title: "About", link: "#" },
    { title: "Contact", link: "#" },
    { title: "Login", link: "#" },
  ];

  const [hover, setHover] = useState(null);

  return (
    <div className="py-40">
      <div
        onMouseLeave={() => setHover(null)}
        className="relative max-w-xl flex justify-between mx-auto bg-gray-100 rounded-full px-4 py-2"
      >
        {navItems.map((item, idx) => (
          <a
            key={item.title}
            href={item.link}
            onMouseEnter={() => setHover(idx)}
            className="text-sm relative text-gray-500 rounded-full px-3 py-1 group"
          >
            {hover === idx && (
              <motion.div
                layoutId="nav-highlight"
                className="absolute inset-0 rounded-full bg-black"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10 text-gray-500 group-hover:text-white">{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
