"use client";

import React, { useEffect, useState, useRef } from "react";
import { fetchPatient } from "@/helpers/fetcher";

import { motion, useInView } from "framer-motion"

const Table = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const [patientData, setPatientData] = useState({
    id: [],
    prefix: [],
    family: [],
    firstName: [],
    bday: [],
    gender: [],
    city: [],
    street: [],
    state: [],
    wayOfCommunication: [],
    valueOfCommunication: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPatient();
        setPatientData(data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchData();
  }, []);

  const {
    id,
    prefix,
    family,
    firstName,
    bday,
    gender,
    city,
    street,
    state,
    wayOfCommunication,
    valueOfCommunication,
  } = patientData;

  function td(element, classnames, key) {
    return (
      <td className={classnames} key={key}>
        {element}
      </td>
    );
  }

  return (
    <motion.div className=" p-20 bg-[#e4e4e4] overflow-x-auto shadow-[0px_35px_50px_rgba(0,0,0,0.2)]"
    ref={ref}
    transition={isInView ? {duration:0.7}: {}}
    animate={isInView ? {opacity: [0,1]} : {opacity: 0}}
    
    >

        <table className="rounded-[30px] font-[12px] border border-collapse table-auto ">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-500 px-4 py-2 cursor-pointer main-font">
                ID
              </th>
              <th className="border border-gray-500 px-4 py-2 cursor-pointer main-font">
                Prefix
              </th>
              <th className="border border-gray-500 px-4 py-2 cursor-pointer main-font">
                Family
              </th>
              <th className="border border-gray-500 px-4 py-2 cursor-pointer main-font">
                First Name
              </th>
              <th className="border border-gray-500 px-4 py-2 cursor-pointer main-font">
                Birthday
              </th>
              <th className="border border-gray-500 px-4 py-2 cursor-pointer main-font">
                Gender
              </th>
              <th className="border border-gray-500 px-4 py-2 cursor-pointer main-font">
                City
              </th>
              <th className="border border-gray-500 px-4 py-2 cursor-pointer main-font">
                Street
              </th>
              <th className="border border-gray-500 px-4 py-2 cursor-pointer main-font">
                State
              </th>
              <th className="border border-gray-500 px-4 py-2 cursor-pointer main-font">
                Way Of Communication
              </th>
              <th className="border border-gray-500 px-4 py-2 cursor-pointer main-font">
                Value Of Communication
              </th>
            </tr>
          </thead>
          <tbody>
            {id.map((element, idx) => (
              <tr className="items-center" key={'tr'+idx}>
                {td(
                  element,
                  "border h-full border-gray-500 px-4 py-2 bg-gray-200 font-bold text-center main-font",
                  `${'id' + idx}`
                )}
                {td(
                  prefix[idx],
                  "border bg-white border-gray-500 px-4 py-2 font-normal  text-center main-font",
                  `${'prefix'+ idx}`
                )}
                {td(
                  family[idx],
                  "border bg-white border-gray-500 px-4 py-2 font-normal  text-center main-font",
                  `${'family' + idx}`
                )}
                {td(
                  firstName[idx],
                  "border bg-white border-gray-500 px-4 py-2 font-normal  text-center main-font",
                  `${'firstName' + idx}`
                )}
                {td(
                  bday[idx],
                  "border bg-white border-gray-500  px-4 py-2 font-normal  text-center main-font",
                  `${'bday' + idx}`
                )}
                {td(
                  gender[idx],
                  "border bg-white border-gray-500  px-4 py-2 font-normal  text-center main-font",
                  `${'gender' + idx}`
                )}
                {td(
                  city[idx],
                  "border bg-white border-gray-500  px-4 py-2 font-normal  text-center main-font",
                  `${'city' + idx}`
                )}
                {td(
                  street[idx],
                  "border bg-white border-gray-500  px-4 py-2 font-normal  text-center main-font",
                  `${'street' + idx}`
                )}
                {td(
                  state[idx],
                  "border bg-white border-gray-500  px-4 py-2 font-normal  text-center main-font",
                  `${'state' + idx}`
                )}
                {td(
                  wayOfCommunication[idx],
                  "border bg-white border-gray-500  px-4 py-2 font-normal  text-center main-font",
                  `${'wayOfCommunication' + idx}`
                )}
                {td(
                  valueOfCommunication[idx],
                  "border bg-white border-gray-500 text-center px-4 py-2 font-normal  text-center main-font",
                  `${'valueOfCommunication' + idx}`
                )}
              </tr>
            ))}
          </tbody>
        </table>

      </motion.div>

  );
};

export default Table;
