import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[8vw] h-[5vw] mt-10 mr-[1vw] rounded-md relative top-[1.2vw] bg-red-500"
                  ></motion.div>
                )}
                <h1 className=" pt-[2.5vw] -mb-[1vw] flex items-center uppercase text-[7vw] leading-[3.2vw] font-['FoundersGrotesk - 600']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center">
        {["For public and private companies", "From the first pitch to IPO"]}
        <div className="start flex items-center gap-5">
          <div className="px-4 py-2 border-[1px] border-zinc-500  font-light text-sm capitalize rounded-full">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500 ">
            <span className="rotate-[45deg]">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
