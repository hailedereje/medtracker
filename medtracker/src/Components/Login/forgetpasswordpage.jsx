import React from 'react'
import LoginLogo from './LoginLogo';

export default function ForgotPassword() {
  return (
    <div className='bg-blue-100 w-[100%] h-[100%] '>
        <LoginLogo/>
        <div className='overflow-y-auto w-[600px] h-[600px] mx-auto mb-6 flex flex-col bg-white rounded-l-3xl'>
                <div className="m-3">
                    <h3 className="text-gray-400 text-l">
                        <a href=""><span className='font-bold text-xl'>&larr;</span> &nbsp;BACK</a>
                    </h3>
                </div>
                <div className="flex flex-col mt-[10%] ml-10">
                    <h1 className='text-5xl font-bold'>
                    Reset password
                    </h1>
                    <h1 className='text-2xl mt-5'>
                    Please type your email address and press the button to reset your password
                    </h1> 
                </div>
        
       <div className="flex flex-col ml-10 mt-5 ">
        <form action="">
            {/* <input type="text" className='w-[90%] border p-3 border-gray-600 mb-6 rounded-xl focus:border-green-400' placeholder='Password'/> */}
            <input type="text" className='w-[90%] border p-4 border-gray-600 rounded-xl mb-6' placeholder='Email'/>
            <input type="submit" className='w-[90%] p-4 bg-blue-500 rounded-xl mb-6 hover:cursor-pointer' value="Reset Password"/>
        </form>
        
       </div>
            
       </div>
       
        <div className="mt-[5%]">
            &nbsp;
        </div>
    </div>
  )
}
