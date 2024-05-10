'use client';
import ChooseCategory from '@/components/atoms/Article/ChooseCategory/ChooseCategory';
import ArticleCard from '@/components/molecules/Article/ArticleCard/ArticleCard';
import Link from 'next/link';
import React, { useState } from 'react'

interface Post {
    id: number,
    title: string,
    category: string,
    illustration: string,
  }
  
  const articleCatalog = [
    'Kesehatan Mental',
    'Stress',
    'Kecemasan',
    'Depresi',
    'Gangguan Kepribadian',
    'Gangguan Tidur',
  ]

const ChooseArticle = ({
    posts
}:{
    posts: Post[]
}) => {
    const [postsShowed, setPostsShowed] = useState (posts);
    const [selectedCategory, setSelectedCategory] = useState (-1);

    const changePostShowed = (key: number) => {
        if (key === selectedCategory) {
            setSelectedCategory(-1)
            setPostsShowed(posts)
        } else {
            setSelectedCategory(key)
            setPostsShowed(
                posts.filter(post => post.category === articleCatalog[key])
            )
        }
    }

  return (
    <div className='px-[8vw] mt-[15vw]'>
        <p className='font-[700] text-[2.5vw] w-[50vw] mb-[0.5vw]'>Ini akan membantu kamu untuk mengetahui tentang kesehatan mental</p>
        <p className='text-[#808080] text-[1.5vw] mb-[0.5vw]'>Tips & info untuk menjaga kesehatan mental</p>
        <div className='flex gap-[2vw] mb-[2vw]'>
            {
                articleCatalog.map((category, index) => {
                    return (
                        <button key={index} onClick={() => {
                            changePostShowed(index)
                        }}>
                            <ChooseCategory key={index} category={category}
                            isSelected= { selectedCategory === index ? true : false }/>
                        </button>
                    )
                })
            }
        </div>
        <div className='flex-col'>
            {
                postsShowed.map((post, index) => {
                    if (index < 3) {
                        return (
                            <Link href={{
                                pathname: "/login",
                            }} key={index}>
                                <ArticleCard key={index} category={post.category} title={post.title} illustration={post.illustration}/>
                            </Link>
                        )
                    }
                })
            }
        </div>
            <button className='mt-[1vw] px-[1vw] border-[#8CC0DE] border-[0.25vw] font-[500] hover:bg-[#8CC0DE] transition-colors duration-500 hover:shadow-lg'>Lihat semua</button>
    </div>
  )
}

export default ChooseArticle