import { IoIosClose } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";
import { TbView360Number } from "react-icons/tb";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaReact } from "react-icons/fa";

const Card = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="w-72 p-6 flex flex-col min-h-[26rem] h-[27rem] rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
"
          >
            <h2 className="font-bold text-[10px]">Motion/Framer Motion</h2>

            <p className="text-neutral-600 mt-2 text-[10px]">
              A Beautiful Motion libary for animation in React.
            </p>

            <div className="flex items-center justify-center">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-1 text-[10px] mt-4 rounded-md px-2 py-1 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] hover:bg-gray-100 transition-colors"
              >
                {/* <img
                  className="w-4 h-4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIv9VemwFYtx8jbgL0ap84wXK6uR8ss9RTJg&s"
                  alt="Logo"
                /> */}
                <FaReact className="w-3 h-3" />
                React
                <IoIosClose className="h-3 w-4 text-neutral-400" />
              </button>
            </div>
            {/* motion div here */}
            <div className="bg-gray-200 border-neutral-200 flex-1 mt-4 rounded-lg relative">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)",
                }}
                transition={{
                  // duration: 0.3, ease: "easeInOut"
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  // mass: 1,
                }}
                className="absolute inset-0 h-full w-full rounded-lg bg-white divide-y divide-neutral-200"
              >
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br from-white to-gray-100 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <MdMessage className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Aceternity UI Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      A collection of UI components
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br from-white to-gray-100 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Ri24HoursLine className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      24 Hours trun Around
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      Code daily 24/7
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br from-white to-gray-100 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <TbView360Number className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      360 deg all Around
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      Code daily 365 days
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br from-white to-gray-100 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <MdAccessTimeFilled className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Time is limited
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      Time won't stop for u
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br from-white to-gray-100 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-xl flex items-center justify-center">
                    <IoIosAdd className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Create Project
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      Code daily 24/7
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* motion div end here */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
