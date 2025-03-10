import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";
const LatestNews = () => {
    const [news,setNews] = useState([]);
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/category/08")
        .then(response=>response.json())
        .then(data=>setNews(data))
    },[])
    const allNews = news.data;
    console.log(allNews);
    
    return (
        <div className="flex items-center gap-2 bg-base-200 p-2">
            <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
            <Marquee className="space-x-10" pauseOnHover>
                {allNews?.map(news=><Link to={`/news/${news._id}`} className="me-4">{news.title}</Link>)}
            </Marquee>
        </div>
    );
};

export default LatestNews;