import React from 'react'
import Intro from "@/components/intro/Intro.jsx"
import Motivation from "@/components/motivation/Motivation.jsx"
import Table from '@/components/table/Table.jsx'
import Footer from '@/components/Footer/Footer.jsx'
function page() {
  return (
    <div>
      <Intro/>
      <Motivation/>
      <Table/>
      <Footer/>
    </div>
  )
}

export default page
