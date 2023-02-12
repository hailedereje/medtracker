import React, { useState } from 'react'
import { FaPlus,FaMinus } from 'react-icons/fa'

const SingleQuestion = ( {col}) => {
    const [show,setShow] = useState(false)
    const toggle = ()=>{
      setShow(prev=>!prev)
    }
  return (
    <div  className="flex flex-col  w-[100%]">
                    <div className="flex w-[100%] border-2">
                        <div className="flex flex-row  w-[100%]  " onClick={()=>toggle()}>
                            <div  className="flex justify-center items-center p-3 mr-auto ml-2">
                                <p className="text-l">
                                    {col.question}
                                </p>
                            </div>
                            <div className="flex justify-center items-center mr-2 p-4">
                                <div className="flex justify-center items-center p-3 bg-blue-100 rounded-l">
                                    {show ? <FaMinus/>:<FaPlus/>}
                                </div>   
                            </div>
                        </div>  
                    </div>
                     
                    {show ? <div className='flex border-2'>

                        <div className="flex justify-center items-center p-5 w-[85%] transition">
                            <p className="text-gray-500 text-l leading-7">
                                {col.answer}
                            </p>
                        </div>
                    </div> : <></>}
                </div> 
  )
}

export default SingleQuestion

