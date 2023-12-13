"use client";

import Image from "next/image";
import React from "react";

import heroImage from "@/assets/heroImage.jpg";
import ghiImage from "@/assets/6ghi.png"

import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      {/* Image and overlay */}
      <Image
        src={heroImage}
        className="h-screen w-full absolute top-0 left-0 -z-50"
        alt="BG image"
      />
      <div className="h-screen w-full absolute top-0 left-0 bg-black opacity-40 -z-20" />

      {/* Content */}
      <motion.div
        className="text-white text-center bg-black/[0.7] p-20 lg:px-40 md:px-20 sm:px-10 overflow-clip"
        initial={{ scale: 0 }}
        animate={{ scale: [0,1], opacity: [0,1] }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        {/* 6ghi image */}
        <div className="flex justify-center items-center w-full h-full object-contain p-12">
        <Image
        src={ghiImage}
        className="w-full h-full object-contain"
        alt="6GHI logo"
      />
        </div>

        {/* Information for website */}
        <div className="flex flex-col items-center justify-center">
          <p className="lg:text-2xl md:text-xl">Presented for: 6GHI</p>
          <p className="lg:text-2xl md:text-xl">Date: 19.12.2024</p>
          <p className="lg:text-2xl md:text-xl">By: Ghaith Almasri</p>
          <h1 className="lg:text-4xl md:text-2xl py-5">A Web Based FHIR Visualizer</h1>
        </div>
      </motion.div>
      <div className="mb-40 bg-black"/>
    </div>
  );
};

export default Intro;