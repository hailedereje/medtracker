import React from 'react'
import { news } from '../../data'

const News = () => {
  return (
    <div
    data-testid="news"
    
    className='max-w-[1200px] m-auto flex flex-col items-center py-[10rem]'>
        <div className='my-10'>
            <h1 className='text-2xl text-cyan-600 text-center mb-3'>WHAT WE DO</h1>
            <h1 className='text-4xl'>Latest News & Articles</h1>
        </div>
        <div className='grid grid-cols-3 gap-10'>
            {news.map((nw) => (
                <div key={nw.title}>
                    <img className='h-[40vh] object-cover rounded-bl-[3rem] rounded-tr-[3rem]' src={nw.image} alt=""/>
                    <h1 className='text-center text-xl mt-4 text-cyan-700'>{nw.title}</h1>
                    <p className='text-center text-[15px] mt-3'>Read More  </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default News