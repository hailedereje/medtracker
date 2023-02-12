import React from 'react'
import img1 from "../assets/about/about1.png"
import img2 from "../assets/about/about2.png"
import img3 from "../assets/about/about3.jpg"
import img4 from "../assets/about/about4.jpg"
import img6 from "../assets/about/about6.png"
import img7 from "../assets/b5.png"
import '../index.css'

function About(params) {
    return(
        <div className="">
            <div className="mt-40 mb-40 grid sm:grid-cols-2">
                <div className='mb-20'>
                    <div className='flex-1 ml-10 mr-10 mb-10'>
                        <img className="w-[550px] h-[600px]" src={img1} alt="" />
                    </div>
                    <div className='text-center'>
                        <button className='bg-[#33B9CB] text-white font-bold pl-8 pr-8 pt-4 pb-4 rounded-md '>
                            Order card
                        </button>
                    </div>
                </div>
                <div className='ml-5'>
                    <h1 className='text-[#33B9CB] mb-3 '>ABOUT THE WORLD MEDICAL CARD ®</h1>
                    <p className='font-bold text-4xl mb-10 '>
                        What is The World Medical Card.
                    </p>
                    <p className='text-lg'>
                        The World Medical Card® is a subscription 
                        service designed to provide you with a safer everyday life, and make health 
                        professionals able to support you fast and accurate should you find yourself 
                        in a situation where it’s required. You will have your own personal profile 
                        which can be accessed via app or browser. Enter your critical health information 
                        and keep it updated. You can chose to share your profile with relatives, travel 
                        partner or others you trust, so that they can be able to provide you with first 
                        line of support. Your medical information is coded according to World Health 
                        Organizations global standards (ICD-10, ATC) to ensure that your condition and 
                        requirement is understood by health professionals and pharmaceutical personnel 
                        all over the world. There is a built in translation function for 4 languages 
                        which will ease communication in relevant local terms. The World 
                        Medical Card makes it easy for health professionals to support you when needed.
                    </p>
                </div>
            </div>
            <div className="bg-[#33B9CB] pb-20 pt-20">
                <p className='text-center ml-10 mr-10 text-lg text-white flex justify-center'>
                    “We help people get fast and safe medical treatment by giving them an 
                    international health card with codes that can be read by doctors all 
                    over the world. In this way, we also help the doctors who treat the 
                    patient. ”
                </p>
                <div className=''>
                    <div className='flex justify-center mt-10'>
                        <img className="mb-10 " src={img2} alt="" />
                    </div>
                    <div className='text-center ml-10 mr-10'>
                        <p className='flex justify-center text-3xl font-bold text-white '>Professor Michael Nobel</p>
                        <p className='flex justify-center text-2xl text-gray-900 '>PhD, Chairman of the Board of WMC Holding</p>
                    </div>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 mt-10 mb-20">
                <div className='flex-1 ml-10 mr-10'>
                    <img className="" src={img3} alt="" />
                </div>
                <div className='ml-5 mr-10'>
                    <h1 className='font-bold text-3xl mb-10 '>
                        The World Medical Card® background
                    </h1>
                    <div className='text-[#33B9CB] text-2xl'>
                        <p className='mb-10'>
                            The Norwegian/Swiss company World Medical Center is behind 
                            the work on the development of this international emergency 
                            card.
                        </p>
                        <p className='mb-10'>
                            World Medical Center put together an outstanding team of experienced 
                            doctors in collaboration with faculty at the University of Bergen and 
                            the result was the World Medical Card®.
                        </p>
                        <p className='mb-10'>
                            It’s now possible to always have important medical information at hand. 
                            The World Medical Card® makes it easy to communicate that information to 
                            medical personnel wherever you are in the world. This service is also on 
                            your mobile phone, online browser and as a personal physical card.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#091D3E] pt-40 pb-40">
                <div className='text-white ml-5 mr-5'>
                    <h1 className='flex justify-center font-bold text-center text-3xl mb-20'>
                        Our Mission is to Provide Life-Saving Information 
                        to Help People Feel Safe
                    </h1>
                    <p className='mb-10 text-lg'>
                        In the app, you can store and update your health information and share 
                        your profile with family, friends and travel companions so that they can 
                        present this to health professionals should an emergency arise. 
                        You can also upload medical documents, such as vaccination certificates and 
                        donor cards, add contact information and emergency buttons to relatives
                    </p>
                    <p className='mb-10 text-lg'>
                        With The World Medical Card® on mobile, you can also translate your allergies 
                        into 20 languages. The allergy lists have been developed in collaboration with 
                        leading Swedish and Norwegian allergists. We are proud to be able to offer our 
                        members a completely unique allergy list. 
                    </p>
                    <p className='mb-10 text-lg'>
                        You can enter other important information such as eyesight prescriptions, 
                        travel insurance certificates, photos of non-prescription medicines – 
                        so that you can buy the same and anything else you think is important to 
                        you while abroad. Additionally, you will receive a physical card that 
                        you can take with you.
                    </p>
                    <p className='mb-10 text-lg'>
                        Register the name of your insurance company and the police number on “My page”, 
                        and this information will be printed on the outside of the card. 
                        The World Medical Card® will then function as a combined health and insurance 
                        card and provide maximum travel security
                    </p>
                    <p className='mb-10 text-lg'>
                        We recommend that you always keep The World Medical Card® with your ID. 
                        The card is easily opened by tearing open the seal on the side of the card.
                    </p>
                    <p className='mb-10 text-lg'>
                        With The World Medical Card®, there is a unique password for emergency access to your profile. 
                        By using this, healthcare professionals can gain access to a read-only version of your 
                        online health profile. If you have entered additional information in “My documents” 
                        such as vaccination cards, X-rays or hospital records, health professionals will be able 
                        to read the documents there. The card has a separate field with contact information for your relatives. 
                    </p>
                    <p className='mb-10 text-lg'>
                        The World Medical Card® on your mobile phone is extremely useful when you are traveling. 
                        It helps you communicate with people who do not speak the same language as you. 
                        In 20 languages, you can communicate your health profile and information about your 
                        relatives to health professionals. This way you will be able to avoid misunderstandings a
                        bout your health and achieve fast and correct medical treatment. If you have allergies, 
                        it can be useful to use the mobile solution when you are at a restaurant to help avoid 
                        eating something you can not tolerate. 
                    </p>
                    <p className='mb-10 text-lg'>
                        If you have more questions, you can read more in the FAQ! 
                    </p>
                    <p className='text-lg'>
                        The data you enter is stored safely and securely.
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-20 mb-20 ml-5 mr-5">
                <div>
                    <h1 className='font-bold text-4xl text-center mb-5'>
                        The World Medical Card® in The World
                    </h1>
                    <p className='text-center sm:text-left text-2xl mb-5 '>
                        We at The World Medical Card® are proud to have members in more than 27 countries, 
                        and we actively work to be able to offer our solution to everyone. Our unique 
                        service increases your safety and can save lives by letting you gather your personal 
                        and medical information in one place. The World Medical Card® works anywhere 
                        in the world – around the clock. Order your World Medical card now
                    </p>
                    <div className='flex justify-center'>
                        <img className="" src={img4} alt="" />
                    </div>
                </div>
            </div>
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
                    <h1 className='font-bold text-6xl mb-10 '>Security & Privacy Regulation</h1>
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
            <div className="flex mt-20 bg-[#c0bdbd]">
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
    );
}

export default About