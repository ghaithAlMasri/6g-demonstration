"use client"

import React, { useEffect, useState } from 'react';
import { fetchPatient } from '@/helpers/fetcher';

const Table = () => {
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
    valueOfCommunication: []
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
    valueOfCommunication
  } = patientData;

  console.log(id)

  return (
    <div>
      TABLE
    </div>
  );
};

export default Table;