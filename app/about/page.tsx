import Navbar from '@/components/molecules/Navbar/Navbar'
import AboutUs from '@/components/templates/About/AboutUs/AboutUs'
import OurTeam from '@/components/templates/About/OurTeam/OurTeam'
import Footer from '@/components/templates/Footer/Footer'
import React from 'react'

const page = () => {
  return (
    <div className='bg-gradient-to-b from-[#F5F7FA] to-[#A4E7DC]'>
        <Navbar logo="/telemedicine.svg"
          navComponents={[
            { icon: '/games.svg', text: 'Games', link: '/games' },
            { icon: '/article.svg', text: 'Article', link: '/article/list' },
            { icon: '/chat.svg', text: 'Chat', link: '/chat' },
            { icon: '/community.svg', text: 'Community', link: '/community' },
          ]}
          navLogin={false}></Navbar>
        <AboutUs/>
        <OurTeam/>
        <Footer/>
    </div>
  )
}

export default page