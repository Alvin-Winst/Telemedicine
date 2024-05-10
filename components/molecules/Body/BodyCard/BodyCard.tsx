'use client';
import CardHeading from '@/components/atoms/Body/CardHeading/CardHeading'
import React from 'react'

const BodyCard = ({
    icon, heading, description, link
} : {
    icon: string,
    heading: string,
    description: string,
    link: string
}) => {
  return (
    <a href={`${link}`}>
        <div className='p-[2.5vw] w-fit border-[#D2E0FB] border-[0.75vw] rounded-[5vw] hover:border-[#7BD3EA] hover:shadow-2xl transition-colors duration-500 cursor-pointer h-fit'>
            <div className='flex justify-center mb-[2vw]'>
                <CardHeading icon={`${icon}`} text={`${heading}`}/>
            </div>
            <p className='w-[18vw] text-center'>{description}</p>
        </div>
    </a>
  )
}

export default BodyCard