import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import CartContext from '../context/CartContext';

const Navbar = () => {
    let ctx = useContext(CartContext);
    const location = useLocation();

    return (
        <nav className="bg-gray-900 text-white shadow-md">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                {/* Left - Logo */}
                <Link to="/" className="text-2xl font-bold text-white">ShopEasy</Link>

                {/* Center - Links */}
                <ul className="hidden md:flex space-x-6">
                    <NavItem to="/" label="Home" active={location.pathname === "/"} />
                    <NavItem to="/cart" label="Cart" active={location.pathname === "/cart"} cartCount={ctx.cartArr.length} />
                    <NavItem to="/login" label="Login" active={location.pathname === "/login"} />
                    <NavItem to="/signup" label="Signup" active={location.pathname === "/signup"} />
                </ul>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button className="focus:outline-none">
                        ☰
                    </button>
                </div>
            </div>
        </nav>
    );
};

// NavItem Component
const NavItem = ({ to, label, active, cartCount }) => {
    return (
        <li>
            <Link to={to} className={`relative px-4 py-2 text-lg hover:text-yellow-400 transition ${active ? "text-yellow-400" : ""}`}>
                {label}
                {cartCount > 0 && (
                    <span className="absolute top-[-8px] right-[-12px] bg-red-500 text-white text-xs rounded-full px-2">
                        {cartCount}
                    </span>
                )}
            </Link>
        </li>
    );
};

export default Navbar;
