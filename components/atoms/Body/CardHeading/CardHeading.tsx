'use client';
import React from 'react'
import Image from 'next/image';

const CardHeading = ({
    icon, text
} : {
    icon: string,
    text: string
}) => {
  return (
    <div className='flex items-center gap-[0.5vw] bg-[#7BD3EA] w-fit px-[1.5vw] rounded-[2vw] self-center h-[5vw]'>
        <Image src={`${icon}`} alt='' width='5' height='5' className='w-[3.5vw]'></Image>
        <h3 className='text-[1.75vw] font-[600]'>{text}</h3>
    </div>
  )
}

export default CardHeading