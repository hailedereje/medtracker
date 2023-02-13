import React from 'react'
// import { Link } from 'react-router-dom'
import { Allergies } from './Allergies'
import Diagnosis from './Diagnosis'
import Medicine from './Medicine'
import Vaccines from './Vaccines'
import Document from './Document'
import SidebarAdd from './SidebarAdd'
import { useState } from 'react'
import ordercard from "../../assets/order-card.png"
import Popup from '../Popup'


const Subscription = () => {
    const [side,setSide] = useState(false)
    const [profile,setProfile] = useState(false)
  return (
    <div 
    data-testid = "subscription"
    className='bg-[#daf2f8] flex justify-center items-center py-[2rem]'>
        {side && <SidebarAdd side = { side } setSide={setSide}/>}
        {profile && <Popup setProfile={setProfile}/>}
        <div className='w-[900px] m-auto'>
            <h1 className='text-2xl'>👋🏻 Good morning apphuset runar</h1>
            <div className='bg-white rounded-[20px] w-full p-[20px] my-[1rem]'>
                <h1 className='text-2xl'>apphuset runar</h1>         
                <p className='text-black/50 my-1'>Member since 2022</p>
                <button to="/profile" className='text-black/50 bg-white' onClick={() => setProfile(true)}>(Click to edit you profile)</button>
            </div>
            
            <div className='my-[2rem]'>
                  <Allergies/>
            </div>
            <div className='my-[2rem]'>
                  <Medicine/>
            </div>
            <div className='my-[2rem]'>
                  <Diagnosis/>
            </div>
            <div className='my-[2rem]'>
                  <Vaccines />
            </div>
            <div className='my-[2rem]'>
                  <Document setSide={setSide}/>
            </div>
            <div className='bg-white rounded-[20px] w-full p-[20px] mt-[5rem] mb-6 flex justify-between'>
                <div>
                  <h1 className='text-2xl'>Your card</h1>         
                  <p className='text-black/50 my-5'>Enjoy all the features of your World Medical Card from your wallet</p>
                  <p>Card can be reordered in 237 days</p>
                </div>
                <div>
                  <img className='mt-[-5rem]' src={ordercard} alt="ordercard" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscription