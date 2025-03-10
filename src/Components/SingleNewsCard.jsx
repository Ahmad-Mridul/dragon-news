import { FaRegBookmark, FaRegEye, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router";

const SingleNewsCard = ({ news }) => {
    const { author, title, image_url, details, rating, total_view } = news;

    // Ensure rating is a valid number
    const ratingValue = rating?.number ?? 0;
    const fullStars = Math.floor(ratingValue);
    const hasHalfStar = ratingValue % 1 !== 0 && ratingValue !== 0;
    const emptyStars = Math.max(5 - fullStars - (hasHalfStar ? 1 : 0), 0);

    return (
        <div className="card bg-base-100 shadow-xl border border-gray-200 p-4 mb-4">
            <div className="flex items-center gap-3">
                <img src={author?.img} alt={author?.name} className="w-10 h-10 rounded-full" />
                <div>
                    <h3 className="font-semibold">{author?.name || "Unknown Author"}</h3>
                    <p className="text-xs text-gray-500">
                        {author?.published_date ? new Date(author.published_date).toDateString() : "Unknown Date"}
                    </p>
                </div>
                <div className="ml-auto flex gap-2 text-gray-500">
                    <FaRegBookmark className="cursor-pointer" />
                    <CiShare2 className="cursor-pointer" />
                </div>
            </div>

            <h2 className="font-bold text-lg mt-3">{title}</h2>

            <figure className="mt-3">
                <img src={image_url} alt="news" className="w-full rounded-lg" />
            </figure>
            <p className="text-sm text-gray-600 mt-3">
                {details?.substring(0, 500) || "No details available"}...
            </p>
            <Link to={`/news/${news._id}`} className="text-blue-500 font-semibold mt-2 w-40 text-start cursor-pointer">
                Read More
            </Link>
            <hr className="h-1 text-gray-200" />

            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(fullStars)].map((_, index) => (
                        <FaStar key={index} />
                    ))}
                    {hasHalfStar && <FaStarHalfAlt />}
                    {[...Array(emptyStars)].map((_, index) => (
                        <FaRegStar key={index} />
                    ))}
                    <span className="font-semibold text-gray-700 ml-2">
                        {ratingValue.toFixed(1)}
                    </span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                    <FaRegEye />
                    <span>{total_view ?? 0}</span>
                </div>
            </div>
        </div>
    );
};

export default SingleNewsCard;
