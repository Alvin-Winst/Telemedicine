'use client';
import React from 'react'

const ArticleCategory = ({
    category,
}:{
    category: string,
}) => {
  return (
    <div className='bg-[#D7E5CA] w-fit px-[1vw] py-[0.25vw] text-[1vw] font-[500]'>
        {category}
    </div>
  )
}

export default ArticleCategory