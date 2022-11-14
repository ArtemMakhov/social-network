// import { NavLink } from "react-router-dom";
import { Navigate,NavigateList } from "./Navbar.styled";

const Navbar = () => {
    return (
        <Navigate>
            <div><NavigateList to="/profile">Profile</NavigateList></div>
            <div><NavigateList to="/dialog">Messages</NavigateList></div>
            <div><NavigateList to="/news">News</NavigateList></div>
            <div><NavigateList to="/music">Music</NavigateList></div>
            <div><NavigateList to="/settings">Settings</NavigateList></div>
        </Navigate>
    )
};

export default Navbar;