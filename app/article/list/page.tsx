import Navbar from '@/components/molecules/Navbar/Navbar';
import ArticleList from '@/components/templates/Article/ArticleList/ArticleList';
import React from 'react'

interface Post {
    id: number,
    title: string,
  }
  
  const articleCatalog = [
    'Kesehatan Mental',
    'Stress',
    'Kecemasan',
    'Depresi',
    'Gangguan Kepribadian',
    'Gangguan Tidur',
  ]

const articleList = async () => {
    const postRes = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await postRes.json();

    const updatedPost = posts.map((post) => {
        const category = articleCatalog [ Math.floor(Math.random() * articleCatalog.length) ]
        return {...post, category: category, illustration: '/article picture.png'};
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
        <ArticleList posts={updatedPost}/>
    </div>
  )
}

export default articleList