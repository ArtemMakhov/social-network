import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='nav'>
            <div><NavLink to="/profile">Profile</NavLink></div>
            <div><NavLink to="/dialog">Messages</NavLink></div>
            <div><NavLink to="/news">News</NavLink></div>
            <div><NavLink to="/music">Music</NavLink></div>
            <div><NavLink to="/settings">Settings</NavLink></div>
        </nav>
    )
};

export default Navbar;