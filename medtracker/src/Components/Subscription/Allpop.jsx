import React from 'react'
import { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { addAllergies } from '../../features/actions/actions'
import {useNavigate } from 'react-router-dom'

const Allpop = ({ setAlergy }) => {
   const [allergy,setAllergy] = useState("")
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleSubmit = async(e) => {
    e.preventDefault()
     dispatch(addAllergies({id:1,name:allergy}))
     navigate('/sub')
   }
    return (
        <div
        className={`w-screen bg-black/40 z-20  fixed top-0 h-screen flex justify-end  ease-in-out duration-500`}
      >
        <div className="bg-white w-[35vw] px-10">
          <div className="flex my-5">
          <BiArrowBack size={25} className="text-blue-500 cursor-pointer mr-10" onClick={() => setAlergy(false)}/>
              <h1 className="text-xl">Add Allergies</h1>
          </div>
          <form className='w-full' onSubmit={handleSubmit}>
             <input className='border border-black/30 p-[15px] rounded-md mt-5 w-full focus:outline-slate-400' onChange={(e) => setAllergy(e.target.value)} placeholder='Document title'/>
          </form>
        </div>
      </div>
      )
}

export default Allpop