import React from 'react'
import Image from 'next/image'

const CommunityCard = ({
    image, title, desc
}:{
    image: string,
    title: string,
    desc: string,
}) => {
  return (
    <div>
        <div className='w-[85vw] mb-[2vw] bg-gradient-to-l from-[#FAF0D7] to-[#7BD3EA] p-[1.5vw] rounded-[2vw] border-[#8CC0DE] border-[0.25vw]'>
        <Image src={`${image}`} alt='' width='150' height='8' className='w-[10vw] h-[10vw] object-cover rounded-[1vw]'></Image>
        <div>
            <p className='w-[75vw] text-[1.75vw] font-[700] mt-[0.5vw]'>{title}</p>
            <p className='mt-[0.5vw]'>{desc}</p>
        </div>
    </div>
    </div>
  )
}

export default CommunityCard