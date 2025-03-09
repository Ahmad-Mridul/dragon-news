import React from "react";
import logo from "../assets/logo.png"
import moment from "moment";
import { NavLink } from "react-router";
const Header = () => {
    return (
        <>
            <NavLink to="/"><img src={logo} alt="" className="mx-auto pt-[50px] ps-4 pe-4"/></NavLink>
            <p className="text-center text-gray-500">Journalism Without Fear or Favour</p>
            <p className="text-center text-gray-500">{moment().format("dddd, MMMM Do YYYY")}</p>
        </>
    );
};

export default Header;
