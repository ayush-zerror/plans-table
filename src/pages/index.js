import Footer from '@/components/common/Footer'
import Section1 from '@/components/home/Section1'
import Section2 from '@/components/home/Section2'
import Section3 from '@/components/home/Section3'
import Section4 from '@/components/home/Section4'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Section1 />
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </main>
  )
}

export default Home