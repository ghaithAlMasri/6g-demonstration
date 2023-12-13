import React from 'react'
import Intro from "@/components/intro/Intro.jsx"
import Motivation from "@/components/motivation/Motivation.jsx"
import Table from '@/components/table/Table.jsx'

function page() {
  return (
    <div>
      <Intro/>
      <Motivation/>
      <Table/>
    </div>
  )
}

export default page
