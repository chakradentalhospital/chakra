import React from "react";
import bg from "../../assets/Home/2.jpg"; 
import { FaPlay } from "react-icons/fa";

const WatchVideo = () => {
  return (
    <section
      className="relative w-full h-[400px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative flex items-center justify-center w-[100px] h-[100px] rounded-full bg-white text-[#650E45] text-3xl cursor-pointer">
          <FaPlay className="ml-1" />
          <span className="absolute animate-ping-custom w-[100px] h-[100px] border-2 border-white rounded-full z-[-1]" />
          <span className="absolute animate-ping-custom delay-500 w-[100px] h-[100px] border-2 border-white rounded-full z-[-1]" />
          <span className="absolute animate-ping-custom delay-[1000ms] w-[100px] h-[100px] border-2 border-white rounded-full z-[-1]" />
        </div>
      </div>
    </section>
  );
};

export default WatchVideo;
