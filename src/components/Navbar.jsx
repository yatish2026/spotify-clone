import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img className='w-8 bg-black rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
            <img className='w-8 bg-black rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />

        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore premium</p>
            <p className='text-red-300 py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
            <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>Dia</p>
        </div>
    </div>
    </>
    

  )
}

export default Navbar