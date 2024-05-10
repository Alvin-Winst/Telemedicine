import Navbar from '@/components/molecules/Navbar/Navbar'
import CommunityList from '@/components/templates/Community/CommunityList/CommunityList'
import React from 'react'

interface Community {
  id: number,
  title: string,
}

const page = async () => {
  const communityRes = await fetch('https://jsonplaceholder.typicode.com/posts');
  const communities: Community[] = await communityRes.json();

  const updatedCommunities = communities.map((community) => {
    return {...community, desc: 'Lorem ipsum dolor sit amet consectetur. Enim rhoncus ac nibh donec. Mattis massa bibendum congue ac ut egestas nulla id donec.', image: '/article picture.png'};
  });

  return (
    <div className='bg-gradient-to-b from-[#F5F7FA] to-[#A4E7DC]'>
        <Navbar logo="/telemedicine.svg"
          navComponents={[
            { icon: '/games.svg', text: 'Games', link: '/games' },
            { icon: '/article.svg', text: 'Article', link: '/article/list' },
            { icon: '/chat.svg', text: 'Chat', link: '/chat' },
            { icon: '/community.svg', text: 'Community', link: '/community/list' },
          ]}
          navLogin={false}></Navbar>
          <div className='px-[7vw] py-[2vw]'>
            <p className='font-[600] text-[2.25vw] mb-[1.5vw] px-[1.5vw] py-[0.75vw] bg-[#9BE8D8] border-[#7BD3EA] border-[0.25vw] rounded-[1.5vw]'>Komunitas</p>
            <div>
              {
                updatedCommunities.map((community) => {
                  return (
                    <CommunityList image={`${community.image}`} title={`${community.title}`} desc={`${community.desc}`}/>
                  )
                })
              }
            </div>
          </div>
    </div>
  )
}

export default page