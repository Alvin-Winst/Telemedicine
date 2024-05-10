'use client';
import Link from 'next/link'
import React from 'react'

const NavbarButtons = ({
    text,
    link,
}:{
    text: string,
    link: string,
}) => {
  return (
    <a 
    className='no-underline bg-[#8CC0DE] px-[1.25vw] py-[0.5vw] rounded-[1.5vw] text-white font-[600] border-[#7BD3EA] border-[0.25vw] text-[1.5vw]'
    href={`${link}`}>{text}</a>
  );
}

export default NavbarButtons