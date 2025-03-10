import { NavLink } from "react-router";
import userIcon from "../assets/user.png"
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
const Navbar = () => {
    const {user, signOutUser} = useContext(AuthContext)
    return (
        <div className="flex justify-between items-center my-5">
            <div>

            </div>
            <div className="nav">
                <NavLink className="me-5 font-poppins" to="/">Home</NavLink>
                <NavLink className="me-5 font-poppins" to="/">About</NavLink>
                <NavLink className="me-5 font-poppins" to="/">Career</NavLink>
            </div>
            <div className="login flex gap-2">
                <img src={userIcon} alt="" />
                {user && <p>{user.email}</p>}
                {
                    user 
                    ?
                    <NavLink onClick={signOutUser} to="/auth/login" className="btn bg-[black] text-white px-10">SignOut</NavLink>
                    :
                    <NavLink to="/auth/login" className="btn bg-[black] text-white px-10">Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;