import TeamCard from '@/components/atoms/About/TeamCard/TeamCard'
import React from 'react'

const OurTeam = () => {
  return (
    <div className='mt-[5vw] mx-[8vw]'>
        <p className='text-[3vw] font-[700] mb-[2vw]'>Our <span className='text-[#7BD3EA]'>Team</span></p>
        <div className='flex px-[10vw] gap-[10vw] justify-center'>
            <TeamCard pict='/member 1.svg' name='Alvin Ray Winston' role='Hacker (Leader)'/>
            <TeamCard pict='/member 2.svg' name='Wiwi Oktriani' role='Hustler'/>
            <TeamCard pict='/member 3.svg' name='Ryan Nathanael' role='Hipster'/>
        </div>
    </div>
  )
}

export default OurTeam