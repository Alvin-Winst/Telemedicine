import Navbar from '@/components/molecules/Navbar/Navbar'
import Footer from '@/components/templates/Footer/Footer'
import UnderDevelopment from '@/components/templates/UnderDevelopment/UnderDevelopment'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar logo="/telemedicine.svg"
          navComponents={[
            { icon: '/games.svg', text: 'Games', link: '/games' },
            { icon: '/article.svg', text: 'Article', link: '/article/list' },
            { icon: '/chat.svg', text: 'Chat', link: '/chat' },
            { icon: '/community.svg', text: 'Community', link: '/community/list' },
          ]}
          navLogin={false}></Navbar>
        <UnderDevelopment/>
        <Footer/>
    </div>
  )
}

export default page