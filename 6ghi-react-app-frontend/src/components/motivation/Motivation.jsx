"use client";
import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

const motivation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref); // Destructure ref and inView from useInView()

  return (
    <div className="bg-black flex justify-center items-center p-20">
      <div
        ref={ref}
        className="w-[90%] p-10 bg-[#e4e4e4] shadow-[rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset] rounded-2xl"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          boxShadow: isInView
          ? 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
          : "none",
        }}
      >
        <h1 className="text-black font-extrabold main-font lg:text-3xl md:text-2xl text-center">
          <span className="text-[rgba(40,84,137,1)] lg:text-7xl md:text-xl">"</span>Since I
          have never worked with FHIR before, I have decided to show you how
          I learn alone and apply my knowledge. This project is only a simple
          demonstration of fetching, cleaning and visualizing data from a FHIR server.
        </h1>
      </div>
    </div>
  );
};

export default motivation;