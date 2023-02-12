import React from 'react'
import {colum1} from '../Components/faq/Data'
import SingleQuestion from '../Components/faq/SingleQuestion'

export default function Faq() {
    const valuesFirstColumn = colum1.map((col) =>{
        return <SingleQuestion key = {col.answer} col = {col}/>
       
    })
  return (
    <div className='w-[100%] flex flex-col gap-10'>
        <div className="flex flex-col gap-10">
            <div className="flex justify-center items-center">
                <h1 className="text-5xl font-bold my-[5%]">
                    FAQ
                </h1>
            </div>
            <div className="flex flex-row gap-3 px-4">
                <div className="flex flex-col w-[50%] rounded">
                    {valuesFirstColumn}
                </div>
                <div className="flex flex-col w-[50%] rounded">
                    {valuesFirstColumn}
                </div>
            </div>
        </div>
        <div className="flex mt-[20%] bg-[#FFF7F1]">
                <div className="flex-1 my-auto text-xl font-[400]">
                    Learn More About The World Medical Card® And How To Use It
                </div>
                <div className="flex-1 m-auto ">
                    <button className="bg-[#a81515]  text-white p-3 item-center rounded-md">
                    Watch Video
                    </button>
                </div>
                <div className="flex-1">
                    <img className="mt-[-100px]" src={img7} alt="" />
                </div>
            </div>

    </div>
  )
}
