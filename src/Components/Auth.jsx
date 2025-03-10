import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Header from "./Header";

const Auth = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Auth;