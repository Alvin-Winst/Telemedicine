'use client';
import React from 'react'
import Image from 'next/image';
import ArticleCategory from '@/components/atoms/Article/ArticleCategory/ArticleCategory';

const ArticleCard = ({
    category, title, illustration
} : {
    category: string,
    title: string,
    illustration: string,
}) => {
  return (
    <div className='flex gap-[2vw] items-center w-[85vw] mb-[2vw] bg-gradient-to-l from-[#FAF0D7] to-[#7BD3EA] p-[1.5vw] rounded-[2vw] border-[#8CC0DE] border-[0.25vw]'>
        <Image src={`${illustration}`} alt='' width='150' height='8' className='w-[13vw] rounded-[1vw]'></Image>
        <div>
            <ArticleCategory category={`${category}`}/>
            <p className='w-[75vw] text-[1.5vw] font-[500] mt-[0.5vw]'>{title}</p>
        </div>
    </div>
  )
}

export default ArticleCard