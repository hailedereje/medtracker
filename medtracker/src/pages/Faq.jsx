import React from 'react'
import {colum1} from '../Components/faq/Data'
import SingleQuestion from '../Components/faq/SingleQuestion'

export default function Faq() {
    const valuesFirstColumn = colum1.map((col) =>{
        return <SingleQuestion key = {col.answer} col = {col}/>
       
    })
  return (
    <div className='w-[100%] flex flex-col gap-10 mb-[20%]'>
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

    </div>
  )
}
