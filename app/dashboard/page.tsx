import Navbar from "@/components/molecules/Navbar/Navbar";
import ChooseArticle from "@/components/templates/Article/ChooseArticle/ChooseArticle";
import Body from "@/components/templates/Body/Body";
import Footer from "@/components/templates/Footer/Footer";
import Header from "@/components/templates/Header/Header";

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

  export default async function Page() {
    const postRes = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await postRes.json();
  
    const updatedPost = posts.map((post) => {
      const category = articleCatalog [ Math.floor(Math.random() * articleCatalog.length) ]
      return {...post, category: category, illustration: '/article picture.png'};
  });
  
    return (
      <div className="p-0 bg-gradient-to-b from-[#F5F7FA] to-[#9BE8D8]">
        <Navbar logo="/telemedicine.svg"
          navComponents={[
            { icon: '/games.svg', text: 'Games', link: '/games' },
            { icon: '/article.svg', text: 'Article', link: '/article/list' },
            { icon: '/chat.svg', text: 'Chat', link: '/chat' },
            { icon: '/community.svg', text: 'Community', link: '/community/list' },
          ]}
          navLogin={false}></Navbar>
        <Header/>
        <Body sections={[
          {
            icon: "/article white.svg",
            heading: "Article",
            description: "Lorem ipsum dolor sit amet consectetur. Quis suspendisse volutpat tincidunt sed sociis elementum. Nulla fermentum quis eget porttitor faucibus et. In sit varius eu ultrices in arcu arcu adipiscing. Tellus in et venenatis malesuada volutpat.",
            link: "/article/list"
          },
          {
            icon: "/chat white.svg",
            heading: "Chat",
            description: "Lorem ipsum dolor sit amet consectetur. Quis suspendisse volutpat tincidunt sed sociis elementum. Nulla fermentum quis eget porttitor faucibus et. In sit varius eu ultrices in arcu arcu adipiscing. Tellus in et venenatis malesuada volutpat.",
            link: "/chat"
          },
          {
            icon: "/community white.svg",
            heading: "Community",
            description: "Lorem ipsum dolor sit amet consectetur. Quis suspendisse volutpat tincidunt sed sociis elementum. Nulla fermentum quis eget porttitor faucibus et. In sit varius eu ultrices in arcu arcu adipiscing. Tellus in et venenatis malesuada volutpat.",
            link: "/community/list"
          }
        ]} />
          <ChooseArticle posts={updatedPost}/>
          <Footer/>
      </div>
    );
  }
  
  