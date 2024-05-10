'use client';
import ChooseCategory from '@/components/atoms/Article/ChooseCategory/ChooseCategory';
import ArticleCard from '@/components/molecules/Article/ArticleCard/ArticleCard';
import React, { useState } from 'react'
import Link from 'next/link';

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

const ArticleList = ({
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
    <div className='px-[7vw] py-[2vw]'>
        <p className='font-[600] text-[2.25vw] mb-[1.5vw] px-[1.5vw] py-[0.75vw] bg-[#9BE8D8] border-[#7BD3EA] border-[0.25vw] rounded-[1.5vw]'>Artikel</p>
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
                    return (
                        <Link href={{
                            pathname: "/article",
                            query: {id: index+1}
                        }} key={index}>
                            <ArticleCard key={index} category={post.category} title={post.title} illustration={post.illustration}/>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ArticleList