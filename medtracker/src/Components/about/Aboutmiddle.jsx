import React from 'react'

import img4 from "../../assets/about/about4.jpg"

function Aboutmiddle() {
  return (
    <div data-testid = "amiddle">
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
    </div>
  )
}

export default Aboutmiddle