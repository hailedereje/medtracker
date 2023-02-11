import React from 'react'
import { news } from '../data'

const News = () => {
  return (
    <div className='max-w-[1200px] m-auto p-20 flex flex-col items-center '>
        <div>
            <h1>What we do</h1>
            <h1>Latest News & Articles</h1>
        </div>
        <div className='flex gap-10 justify-center items-center'>
            {news.map(nw => (
                <div>
                    <img src={nw.image} alt=""/>
                    <h1 className='text-center'>{nw.title}</h1>
                    <p>Read More  </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default News