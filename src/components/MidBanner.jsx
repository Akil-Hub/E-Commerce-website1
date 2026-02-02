import React from 'react'
import banner from '../assets/banner1.jpg'
import Button from '@/components/Buttons/Button'

const MidBanner = () => {
  return (
    <div className='bg-gray-100 md:py-24'>
      <div className='relative wrapper md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px] ' style={{backgroundImage: `url(${banner})`, backgroundPosition:'center', backgroundAttachment: 'fixed'}}>
        <div className='absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
        
            <div className='text-center text-white px-4'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>Next-Gen Electronics at Your Fingertips</h1>
                <p className='text-lg md:text-xl mb-6'>Discover the latest tech innovations with unbeatable prices and free shipping on all orders.</p>
                <Button title={'Shop Now'} className='bg-red-500 hover:bg-red-600 hover:text-white py-2 w-35!'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner