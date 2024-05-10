import React from 'react'
import BodyCard from "@/components/molecules/Body/BodyCard/BodyCard";

interface bodySection {
    icon: string,
    heading: string,
    description: string,
    link: string
}

const Body = ({
    sections
}:{
    sections: bodySection[]
}) => {
  return (
    <div className='flex justify-center gap-[5vw] px-[5vw] mt-[10vw]'>
        {
            sections.map((section, index) => {
                return (
                    <BodyCard key={`${index}`} icon={`${section.icon}`} heading={`${section.heading}`} description={`${section.description}`} link={`${section.link}`}/>
                )
            })
        }
    </div>
  )
}

export default Body