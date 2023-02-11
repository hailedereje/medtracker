import React from 'react'
import '../../index.css'
import {BiArrowBack} from 'react-icons/bi'

const SidebarAdd = ({ side, setSide }) => {
  return (
    <div className={`w-[100vw] bg-black/40 z-20  fixed top-0 h-screen flex justify-end  ease-in-out duration-500`}>
        <div className='bg-white w-[35vw] p-[2rem]'>
            <div className='flex items-center my-4'>
                <BiArrowBack size={25} className="text-blue-500 cursor-pointer" onClick={() => setSide(false)}/>
                <h1 className='ml-5 text-2xl'>Add New Document</h1>
            </div>
            <form className='w-full'>
                <input type="file" className='border border-black/30 p-[20px] rounded-md mt-5 w-full'placeholder='Document title'/>
                <input className='border border-black/30 p-[20px] rounded-md mt-5 w-full' placeholder='Document title'/>
                <select  className='border text-[#263238] border-black/30 p-[20px] rounded-md  bg-white mt-5 w-full bg-white items-center ' placeholder='Document-type'>
                    <option classname="text-black-500">Document Type</option>
                    <option className='my-2'>Certificate</option>
                    <option className='my-2'>Discharge Summary</option>
                    <option className='my-2'>Insurance</option>
                    <option className='my-2'>Living Will</option>
                    <option className='my-2'>Passport</option>
                    <option className='my-2'>Perscription</option>
                    <option className='my-2'>Travel Document</option>
                    <option className='my-2'>X-ray</option>
                    <option className='my-2'>Other</option>
                </select>
                <input className='border border-black/30 p-[20px] rounded-md mt-5 w-full' placeholder='Document Type'/>
                <textarea className='border border-black/30 p-[20px] rounded-md mt-5 w-full' cols="4" rows="4" placeholder='Description(optional)'/>

                <button className='bg-blue-500 text-white p-[15px] rounded-[20px] w-full mt-[3rem]'>UPLOAD NEW DOCUMENT</button>
            </form>
        </div>
    </div>
  )
}

export default SidebarAdd