import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const { user } = useUser();

    const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
    const [isAchievementsDropdownOpen, setAchievementsDropdownOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMouseEnter = (setDropdownOpen) => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setDropdownOpen(true);
    };

    const handleMouseLeave = (setDropdownOpen) => {
        setHoverTimeout(setTimeout(() => {
            setDropdownOpen(false);
        })); // 200ms delay
    };

    const coursesLinks = [
        { path: "/courses/online", name: "Online Courses" },
        { path: "/courses/summer-2024", name: "Summer 2024" },
        { path: "/courses/AerialDroneCourse", name: "Aerial Drone Course" },
    ];
    
    const achievementsLinks = [
        { path: "/teams/timeline", name: "Timeline" },
        { path: "/teams/2055A", name: "2055A" },
        { path: "/teams/2055X", name: "2055X" },
        { path: "/teams/achievements", name: "Achievements" },
    ];
    const menuLinks = [
        { path: "/", name: "Home" },
        { path: "https://2055vrc.live/", name: "Blog" },
        ...coursesLinks,
        ...achievementsLinks,
        { path: "/contact", name: "Contact" },
        { path: "/store", name: "Store" },
        { path: "/donation", name: "Donate" },
        user ? { path: "/profile", name: "Profile" } : { path: "/login", name: "Login" },
    ];

    console.log(user)

    return (
        <nav className="font-mono border-gray-200 bg-gray-900 sticky top-0 z-30">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} alt="Mi3L Schools" className="w-20 h-13 flex p-0" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Mi3L School</span>
                </Link>
                <button
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isMobileMenuOpen}
                > <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>
                {isMobileMenuOpen && (
                <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-900 border-gray-900">
                    {menuLinks.map((link, index) => (
                        link.path.startsWith('http') ? (
                            <li key={index}>
                                <a href={link.path} className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 text-white md:hover:text-orange-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
                                    {link.name}
                                </a>
                            </li>
                        ) : (
                            <li >
                                <button
                                    onClick={() => {navigate(link.path); setMobileMenuOpen(false)}}
                                    className="w-full text-left text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 text-white md:hover:text-orange-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                                >
                                    {link.name}
                                    
                                </button>
                                
                            </li>
                        )
                    ))}
                </ul>
            </div>)}
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-900 border-gray-900">
                        <li>
                            <Link to="/" className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 text-white md:hover:text-orange-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <a href="https://2055vrc.live/" className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 text-white md:hover:text-orange-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent" aria-current="page">Blog</a>
                        </li>
                        <li 
                            onMouseEnter={() => handleMouseEnter(setCoursesDropdownOpen)} 
                            onMouseLeave={() => handleMouseLeave(setCoursesDropdownOpen)} 
                            className="relative"
                        >
                            <Link to="/courses" className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 text-white md:hover:text-orange-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
                            Courses
                            <svg className="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                            </Link>
                            {isCoursesDropdownOpen && (
                                <ul 
                                    className="absolute top-full left-0 mt-0 w-48 border border-gray-200 rounded-md shadow-lg bg-gray-800 border-gray-700 z-50"
                                    onMouseEnter={() => handleMouseEnter(setCoursesDropdownOpen)}
                                    onMouseLeave={() => handleMouseLeave(setCoursesDropdownOpen)}
                                >
                                    <li><Link to="/courses/online" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 text-white hover:bg-gray-700">Online Courses</Link></li>
                                    <li><Link to="/courses/summer-2024" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 text-white hover:bg-gray-700">Summer 2024</Link></li>
                                    <li><Link to="/courses/AerialDroneCourse" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 text-white hover:bg-gray-700">Aerial Drone Course</Link></li>
                                </ul>
                            )}
                        </li>
                        <li 
                            onMouseEnter={() => handleMouseEnter(setAchievementsDropdownOpen)} 
                            onMouseLeave={() => handleMouseLeave(setAchievementsDropdownOpen)} 
                            className="relative"
                        >
                            <Link to="/teams" className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 text-white md:hover:text-orange-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
                            Teams
                            <svg className="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                            </Link>
                            {isAchievementsDropdownOpen && (
                                <ul 
                                    className="absolute top-full left-0 mt-0 w-48 border border-gray-200 rounded-md shadow-lg bg-gray-800 border-gray-700 z-50"
                                    onMouseEnter={() => handleMouseEnter(setAchievementsDropdownOpen)}
                                    onMouseLeave={() => handleMouseLeave(setAchievementsDropdownOpen)}
                                >
                                    <li><Link to="/teams/timeline" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 text-white hover:bg-gray-700">History</Link></li>
                                    <li><Link to="/teams/2055A" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 text-white hover:bg-gray-700">2055A</Link></li>
                                    <li><Link to="/teams/2055X" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 text-white hover:bg-gray-700">2055X</Link></li>
                                    <li><Link to="/teams/achievements" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 text-white hover:bg-gray-700">Achievements</Link></li>
                                </ul>
                            )}
                        </li>
                        
                        <li>
                            <Link to="/contact" className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 text-white md:hover:text-orange-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent" aria-current="page">Contact</Link>
                        </li>
                        <li>
                            <Link to="/store" className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 text-white md:hover:text-orange-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent" aria-current="page">Store</Link>
                        </li>
                        <li>
                            <Link to="/donation" className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 text-white md:hover:text-orange-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent" aria-current="page">Donate</Link>
                        </li>
                       {user && <li>
                            <Link to="/profile" className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 text-white md:hover:text-orange-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent" aria-current="page">Profile</Link>
                        </li>}
                        {!user && <li>
                            <Link to="/login" className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 text-white md:hover:text-orange-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent" aria-current="page">Login</Link>
                        </li>}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
