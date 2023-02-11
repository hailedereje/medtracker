import React from 'react'
import { Link } from 'react-router-dom';
import cover from '../../assets/cover.png'
import LoginLogo from './LoginLogo';

export default function Login() {
  return (
    <div className='bg-blue-100 w-[100%] h-[100%] '>
        <LoginLogo/>
        <div className='overflow-y-auto w-[600px] h-[600px] mx-auto mb-6 flex flex-col items-center bg-white rounded-l-3xl'>
                <div className="mx-2 mt-10">
                    <img src={cover} alt="" />
                </div>

                <div className='flex flex-row justify-center'>
                    <h1 className='font-bold text-3xl mt-[-4]'>
                    World Medical Card®
                    </h1>
                </div>

                <div className='flex flex-row justify-center'>
                    <h2 className='text-xl mt-4 text-gray-600 text-center'>
                    YOUR PERSONAL MEDICAL RECORD <br/>ALWAYS AVAILABLE
                    </h2>
                </div>

                <Link to='/terms'>
                    <button className="bg-blue-600 rounded-full w-[20rem] mt-[15%] mb-5">
                        <h2 className=' text-white text-xl text-center p-3'>login</h2>
                    </button>
                </Link>
       </div>
       
        <div className="mt-[5%]">
            &nbsp;
        </div>
    </div>
  )
}
