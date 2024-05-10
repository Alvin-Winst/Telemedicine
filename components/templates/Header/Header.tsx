import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex justify-center gap-[4vw] items-end pb-[5vw]'>
        <div className='mt-[6vw] w-[38vw]'>
            <h3 className='text-[2.5vw] font-[700] mb-[0.5vw]'>Terkadang kamu tidak menyadari kalau kamu sedang menghadapi masalah dalam dirimu sendiri</h3>
            <p className='text-[1.5vw] text-[#808080] mb-[1.5vw]'>Kondisi mental terkadang tidak bisa diketahui secara kasat mata. Ayo cari tahu apa masalah dalam diri kamu sekarang!</p>
            <a href="#Body" className='flex gap-[0.75vw] py-[0.75vw] px-[1vw] bg-[#9BE8D8] w-fit rounded-[1.5vw] font-[500] shadow-md'>Coba cari tahu <Image src="/arrow.svg" alt="" width="5" height="5" className='w-[1vw]'></Image></a>
        </div>
        <Image src='/header illustration.svg' alt='' width='5' height='5' className='w-[25vw]'></Image>
    </div>
  )
}

export default Header