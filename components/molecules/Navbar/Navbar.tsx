import React from 'react'
import NavbarButtons from "@/components/atoms/Navbar/NavbarButtons/NavbarButtons";
import NavbarComponents from "@/components/atoms/Navbar/NavbarComponents/NavbarComponents";
import Image from 'next/image';

interface Component {
    icon: string,
    text: string,
    link: string,
}

const Navbar = ({
    logo, navComponents, navLogin
}:{
    logo: string,
    navComponents: Component[],
    navLogin: boolean,
}) => {
  return (
    <div className='flex justify-between sticky top-0 px-[3vw] py-[1.25vw] w-[100vw] bg-white shadow-md'>
        <Image src={`${logo}`} alt="" width='20' height='5' className='w-[15vw]'></Image>
        {
        navComponents.map((component) => {
            return (
                <>
                    <NavbarComponents icon={`${component.icon}`} text={`${component.text}`} link={`${component.link}`}/>
                </>
            )
        })}
        <>
            { navLogin? (
                <NavbarButtons text='Login' link='/login'/>
            ):(
                <Image src='/profile.svg' alt='' width='5' height='5' className='w-[3vw] mr-[1vw]'></Image>
            )}
        </>
    </div>
  )
}

export default Navbar