import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Auth = () => {
    return (
        <div className="m-4">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Auth;