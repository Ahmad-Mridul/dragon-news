import { NavLink } from "react-router";
import user from "../assets/user.png"
const Navbar = () => {
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
                <img src={user} alt="" />
                <button className="btn bg-[black] text-white px-10">Login</button>
            </div>
        </div>
    );
};

export default Navbar;