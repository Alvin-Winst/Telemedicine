import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-[#F9F3CC] px-[8vw] pt-[5vw] pb-[2vw] w-[100vw] mt-[6vw] justify-between'>
        <div className=' flex gap-[20vw] mb-[7vw]'>
            <div>
                <Image src='/telemedicine.svg' alt='' width='20' height='5' className='w-[15vw] mb-[3.5vw]'></Image>
                <p>Copyright © 2024 Telemedicine  ltd.</p>
                <p>All rights reserved</p>
            </div>
            <div>
                <p className='font-[700] text-[1.5vw] mb-[1vw]'>Company</p>
                <p className='mb-[1vw]'>About Us</p>
                <p className='mb-[1vw]'>FAQs</p>
                <p className='mb-[1vw]'>Privacy Policy</p>
               <p className='mb-[1vw]'>Testimonials</p>
            </div>
            <div>
                <p className='font-[700] text-[1.5vw] mb-[1vw]'>Support</p>
                <p className='mb-[1vw]'>Help Center</p>
                <p className='mb-[1vw]'>Terms of Service</p>
                <p className='mb-[1vw]'>Legal</p>
                <p className='mb-[1vw]'>Status</p>
            </div>
        </div>
        <div className='flex gap-[1vw]'>
            <Image src='instagram.svg' alt='' width='5' height='5' className='w-[3vw]'></Image>
            <Image src='youtube.svg' alt='' width='5' height='5' className='w-[3vw]'></Image>
            <Image src='facebook.svg' alt='' width='5' height='5' className='w-[3vw]'></Image>
            <Image src='twitter.svg' alt='' width='5' height='5' className='w-[3vw]'></Image>
        </div>
    </div>
  )
}

export default Footer