import React from 'react'
import Image from 'next/image'

const TeamCard = ({
    pict, name, role
}:{
    pict: string,
    name: string,
    role: string,
}) => {
  return (
    <div className='bg-white w-fit p-[2vw] shadow-xl rounded-[2vw]'>
        <Image src={`${pict}`} alt='' width='5' height='5' className='w-[15vw]'></Image>
        <p className='text-center mt-[2vw] text-[1.65vw] font-[700] w-[15vw]'>{name}</p>
        <p className='text-center mt-[2.25vw] text-[1.15vw] font-[600] text-[#7BD3EA]'>{role}</p>
    </div>
  )
}

export default TeamCard