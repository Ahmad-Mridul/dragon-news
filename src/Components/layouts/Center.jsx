import { useLoaderData } from "react-router";
import SingleNewsCard from "../SingleNewsCard";
import LatestNews from "../LatestNews";

const Center = () => {
    const data = useLoaderData();
    const news = data.data;
    return (
        <div>
            <h2 className="font-semibold">Dragon News Home</h2>
            <p>{news.length} news found in this category</p>
            {
                news.map(news=><>
                    <SingleNewsCard news={news} key={news._id}></SingleNewsCard>
                </>)
            }
        </div>
    );
};
export default Center;