'use client';
import React from 'react'
import Image from 'next/image'
import ArticleCategory from '@/components/atoms/Article/ArticleCategory/ArticleCategory';


const ArticlePage = ({
    post,
}:{
    post: {
        id: number,
        userId: number,
        title: string,
        body: string,
        userName: string,
        category: string,
        illustration: string,
    },
}) => {
    if (post.id === -1) {
        return (
          <div className='w-[100vw] h-[100vh] flex items-center justify-center text-center font-[700] text-[3vw]'>
              Article Not Found
          </div>
        )
    } else {
        return (
            <div>
                <Image src={`${post.illustration}`} alt='' width='100' height='8' className='opacity-50 object-cover w-[100vw] h-[15vw]'></Image>
                <div className='px-[10vw] py-[4vw]'>
                    <p className='font-[700] text-[2.5vw] w-[65vw] mb-[0.5vw]'>{post.title}</p>
                    <p className='mb-[1vw] text-[1.25vw]'>By {post.userName}</p>
                    <ArticleCategory category={`${post.category}`}/>
                    <p className='mt-[2.5vw] text-[1.5vw] w-[65vw]'>{post.body}</p>
                </div>
            </div>
        )
    }
}

export default ArticlePage