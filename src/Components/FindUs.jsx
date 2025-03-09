import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold my-4">Find Us On</h2>
            <div className="flex flex-col gap-2">
                <button className="btn justify-start">
                    <FaFacebook />
                    Facebook
                </button>
                <button className="btn justify-start">
                    <AiFillTwitterCircle />
                    Twitter
                </button>
                <button className="btn justify-start">
                    <FaInstagram />
                    Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;
