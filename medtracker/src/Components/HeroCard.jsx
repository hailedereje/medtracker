import React from 'react'
import medcard from '../assets/home/medcard.png'
import { FiEdit } from 'react-icons/fi'
import { ImProfile } from 'react-icons/im'

const HeroCard = () => {
  return (
    <div className='w-[1200px] p-[5rem] bg-white rounded-md m-auto flex shadow-md mt-[-5rem] z-auto gap-8'>
      <div className='100%'>
        <img className = "w-full" src={medcard} alt=''/>
      </div>
      <div className='flex flex-col w-[50%] m-8'>
        <div>
          <h1 className='text-cyan-500 text-2xl mb-5'>THE WORLD MEDICAL CARD®</h1>
          <h1 className=' text-2xl mb-5'>YOUR PERSONAL MEDICAL RECORD – ALWAYS AVAILABLE</h1>
        </div>
        <div className='flex gap-8'>
        <div>
           <FiEdit size={60} className="mb-5"/>
          <h1 className='font-bold mb-3'>Sign up for your card</h1>
          <h1>Fast and accurate medical treatment are dramatically improved - anywhere in the world.</h1>
        </div>
        <div>
          <ImProfile size={60} className="mb-5"/>
          <h1 className='font-bold mb-3'>Sign up for your card</h1>
          <h1>Fast and accurate medical treatment are dramatically improved - anywhere in the world.</h1>
        </div>
        </div>
        <div className='mt-[2rem]'>
          <button className='bg-cyan-500 p-[15px] text-white rounded-md w-[10rem]'>Order Now</button>
          <button className='bg-[#8A1515] ml-[2rem] text-white p-[15px] rounded-md w-[10rem]'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default HeroCard