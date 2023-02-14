import React from 'react'

import img6 from "../../assets/about/about6.png"
import img7 from "../../assets/b5.png"
function AboutBottom() {
  return (
    <div data-testid="abottom">
        <div className="pt-40 pb-40 about mb-40">
                <div className='text-center sm:text-left sm:ml-3 text-4xl font-bold'>
                    <h1>A Common Problem With Medical Treatment</h1>
                    <p className='text-2xl font-semibold mt-10'>
                        Lack of information about a patient’s medical history is one of 
                        the main reasons for delays and malpractice in emergency situations. 
                        Wrong diagnosis and incorrect treatment is a serious and complex problem worldwide, 
                        and it lead to unnecessary suffering and waste of resources.
                    </p>
                </div>
            </div>
            <div className="mb-40 grid sm:grid-cols-2">
                <div className='mb-20'>
                    <div className='flex-1 ml-5 mr-5 mb-10'>
                        <img className="" src={img6} alt="" />
                    </div>
                    <div className='text-center'>
                        <button className='bg-[#091D3E] text-white font-bold pl-8 pr-8 pt-4 pb-4 rounded-md '>
                            Read More
                        </button>
                    </div>
                </div>
                <div className='ml-5'>
                    <h1 className='font-bold text-6xl mb-10 pt-10'>Security & Privacy Regulation</h1>
                    <p className='mb-5'>
                        WMC Technologies provides our customers with the highest level of security available 
                        for online data storage, including personal information and transactions. 
                        All sensitive information shared between your computer and our server is encrypted 
                        via extended SSL. Our Extended (Extended validation – EV) SSL-certificate is provided 
                        by GlobalSign. This certification ensures that all information transferred is safe and 
                        protected from third parties
                    </p>
                    <h1 className='text-3xl mb-5 font-bold'>Additional Encryption</h1>
                    <p className='text-[#33B9CB]'>
                        <span> Encryption – protects against eavesdropping</span><br/>
                        <span> Authentication – validates that the intended recipients are who they claim to be</span><br/>
                        <span> Encryption – protects against eavesdropping</span>
                    </p>
                </div>
            </div>
            <div className="flex mt-20 bg-[#FFF7F1]">
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

export default AboutBottom