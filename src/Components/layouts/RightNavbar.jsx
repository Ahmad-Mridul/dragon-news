import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";

const RightNavbar = () => {
    return (
        <div className="sticky">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
        </div>
    );
};

export default RightNavbar;