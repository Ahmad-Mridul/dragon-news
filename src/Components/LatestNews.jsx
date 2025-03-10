import Marquee from "react-fast-marquee";
import { Link } from "react-router";
const LatestNews = (news) => {
    return (
        <div className="flex items-center gap-2 bg-base-200 p-2">
            <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
            <Marquee className="space-x-10" pauseOnHover>
                {/* {news.map(news=><p>{news.title}</p>)} */}
                <Link to="/news" className="me-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, laborum.
                </Link>
                <Link to="/news" className="me-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, laborum.
                </Link>
                <Link to="/news">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, laborum.
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;