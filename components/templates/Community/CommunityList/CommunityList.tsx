import CommunityCard from '@/components/molecules/Community/CommunityCard/CommunityCard'
import React from 'react'

const CommunityList = ({
    image, title, desc
}:{
    image: string,
    title: string,
    desc: string,
}) => {
  return (
    <div>
        <CommunityCard image={`${image}`} title={`${title}`} desc={`${desc}`}/>
    </div>
  )
}

export default CommunityList