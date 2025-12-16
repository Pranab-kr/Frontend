import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosAnalytics } from "react-icons/io";
import { CiUser, CiSettings } from "react-icons/ci";
import { motion } from "motion/react";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: <FaHome size={20} /> },
    { name: "Analytics", icon: <IoIosAnalytics size={20} /> },
    { name: "User", icon: <CiUser size={20} /> },
    { name: "Settings", icon: <CiSettings size={20} /> },
  ];

  const sidebarVarient = {
    open: {
      width: "16rem",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      width: "4.5rem",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const clildVarient = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const parentVarient = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.07,
        staggerDirection: -1,
      },
    },
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      whileHover="open"
      className="flex h-screen bg-gray-100"
    >
      {/* Sidebar */}
      <motion.div
        variants={sidebarVarient}
        className="bg-neutral-600 text-white p-4 overflow-hidden"
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-6 w-full flex justify-end text-white"
        >
          {isOpen ? "⏪" : "⏩"}
        </button>

        {/* Menu Items */}
        <motion.ul
          variants={parentVarient}
          className="space-y-4"
        >
          {menuItems.map((item, index) => (
            <motion.li
              variants={clildVarient}
              key={index}
              className="flex items-center gap-4 p-2 hover:bg-blue-500 rounded cursor-pointer transition-colors duration-200"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <motion.span
                initial={false}
                animate={isOpen ? { opacity: 1, width: "auto" } : { opacity: 0, width: 0 }}
                transition={{ duration: 0.2, delay: isOpen ? 0.1 : 0 }}
                className="whitespace-nowrap overflow-hidden"
              >
                {item.name}
              </motion.span>
              {item.name}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

    </motion.div>
  );
}
