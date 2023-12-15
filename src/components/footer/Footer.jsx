"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

import logo from "@/assets/ghaith.png";
import ghi from "@/assets/6ghi.png";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="bg-white p-10 shadow[rgba(0, 0, 0, 0.35)_0px_5px_15px]">
      <motion.div
        className=" bg-white flex justify-center items-center flex-col gap-10 "
        ref={ref}
        animate={isInView ? { opacity: [0, 1] } : {}}
        transition={{ duration: 2 }}
      >
        <div className="flex justify-around  w-full  items-center text-center flex-row gap-20 flex-wrap">
          <div className="flex justify-center items-center text-center flex-col">
            <p className="main-font text-lg">
              Phone:{" "}
              <a
                href="tel:+4917645780040"
                className="transition-all ease-in duration-250 hover:text-[rgba(40,84,137,1)]"
              >
                +4917645780040
              </a>
            </p>
            <p className="main-font text-lg">
              Email:{" "}
              <a
                href="mailto:almasrighaith101@gmail.com"
                className="transition-all ease-in duration-250 hover:text-[rgba(40,84,137,1)]"
              >
                almasrighaith101@gmail.com
              </a>
            </p>

            <p className="main-font text-lg">
              Portfolio:{" "}
              <a
                href="https://ghaith.netlify.app/"
                target="_blank"
                className="transition-all ease-in duration-250 hover:text-[rgba(40,84,137,1)]"
              >
                https://ghaith.netlify.app/
              </a>
            </p>
          </div>

          <div className="flex justify-center items-center flex-col gap-5 h-full">
            <Image
              src={logo}
              alt="ghaith image"
              className="object-contain w-[8rem] max-w-full lg:max-w-[8rem] md:max-w-[5rem] sm:max-w-[3rem]"
            />
            <Image
              src={ghi}
              alt="ghi image"
              className="object-contain w-[8rem] max-w-full lg:max-w-[8rem] md:max-w-[5rem] sm:max-w-[3rem]"
            />
          </div>

          <div>
            <p className="main-font text-lg">
              Created as a demonstration pitch for:
              <br />
              <a
                href="https://6ghi.info/en/"
                target="_blank"
                className="transition-all ease-in duration-250 hover:text-[rgba(40,84,137,1)]"
              >
                6G Health Institue GmbH
              </a>
            </p>
          </div>
        </div>

        <div className="w-full">
          <p className="main-font text-lg font-semibold text-center">
            @2023{" "}
            <a
              href="https://ghaith.netlify.app/"
              target="_blank"
              className="transition-all ease-in duration-250 hover:text-[rgba(40,84,137,1)]"
            >
              Ghaith AlMasri
            </a>{" "}
            All Rights Reserved
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
