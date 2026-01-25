import Carousel from '@/components/Carousel'
import Features from '@/components/Features'
import MidBanner from '@/components/MidBanner'
import React from 'react'

const Home = () => {
  return (
    <div className='overflow-x-hidden '>
      <Carousel/>
      <MidBanner/>
      <Features/>
    </div>
  )
}

export default Home