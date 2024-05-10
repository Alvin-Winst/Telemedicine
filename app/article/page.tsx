import ArticlePage from '@/components/templates/Article/ArticlePage/ArticlePage'
import React from 'react'

interface Post {
    id: number,
    userId: number,
    title: string,
    body: string,
}
  
interface User {
    id: number,
    name: string
}


  
const articleCatalog = [
    'Kesehatan Mental',
    'Stress',
    'Kecemasan',
    'Depresi',
    'Gangguan Kepribadian',
    'Gangguan Tidur',
]

const Article = async ({
    searchParams,
}:{
    searchParams: {
        id: number;
    }
}) => {
    const postRes = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await postRes.json();

    const userRes = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await userRes.json();

    const updatedPost = posts.map((post) => {
        const user = users.find(user => user.id === post.userId)
        const category = articleCatalog [ Math.floor(Math.random() * articleCatalog.length) ]
        return {...post, userName: user?.name || "anonymous", category: category, illustration: "/article picture.png"};
    });

    
    const selectedPost = updatedPost.find(post => post.id == searchParams.id)

  return (
    <div className='bg-[#F5F7FA] min-h-[100vh]'>
        <ArticlePage post={selectedPost || 
            { id:-1, userId:-1, 
            category:"none", userName:"anonymous", 
            title:"none", body:"none", illustration:"" }}/>
    </div>
  )
}

export default Article