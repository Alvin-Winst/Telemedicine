import React from 'react'
import Image from 'next/image'

const NavbarComponents = ({
    icon, text, link,
}:{
    icon: string,
    text: string,
    link: string,
}) => {
  return (
    <a className='flex gap-[0.75vw] items-center font-[600] text-[1.5vw]'
    href={`${link}`}>
        <Image src={`${icon}`} alt="" width='5' height='5'
        className='w-[3vw]'>
        </Image>
        <p>{text}</p>
    </a>
  )
}

export default NavbarComponents