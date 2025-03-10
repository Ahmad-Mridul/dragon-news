import { NavLink } from "react-router";
import userIcon from "../assets/user.png"
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
const Navbar = () => {
    const {user, setUser, signOutUser} = useContext(AuthContext);
    const handleSignOut = () => {
        setUser(null);
        signOutUser();
    }
    return (
        <div className="grid grid-cols-12 my-5 ps-2 pe-2">
            <div className="col-span-4">

            </div>
            <div className="nav col-span-4 text-center">
                <NavLink className="me-5 font-poppins" to="/">Home</NavLink>
                <NavLink className="me-5 font-poppins" to="/">About</NavLink>
                <NavLink className="me-5 font-poppins" to="/">Career</NavLink>
            </div>
            <div className="login flex col-span-4 items-end justify-end gap-2">
                <img src={userIcon} alt="" />
                {user && <p>{user.email}</p>}
                {
                    user 
                    ?
                    <NavLink onClick={handleSignOut} to="/auth/login" className="btn bg-[black] text-white px-10">SignOut</NavLink>
                    :
                    <NavLink to="/auth/login" className="btn bg-[black] text-white px-10">Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;