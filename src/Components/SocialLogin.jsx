import { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
const SocialLogin = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            {
                !user && <>
                    <h2 className="font-semibold mb-4">Login with</h2>
                    <div className="flex flex-col gap-2">
                        <button className="btn text-blue-500"><FaGoogle />Login with google</button>
                        <button className="btn"><FaGithub />Login with github</button>
                    </div>
                </>
            }
        </div>
    );
};

export default SocialLogin;