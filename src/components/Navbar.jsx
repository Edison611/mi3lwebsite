import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Navbar() {
    const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
    const [isAchievementsDropdownOpen, setAchievementsDropdownOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    const handleMouseEnter = (setDropdownOpen) => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setDropdownOpen(true);
    };

    const handleMouseLeave = (setDropdownOpen) => {
        setHoverTimeout(setTimeout(() => {
            setDropdownOpen(false);
        })); // 200ms delay
    };

    return (
        <nav className="font-mono border-gray-200 bg-gray-900 sticky top-0 z-30">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} alt="Mi3L Schools" className="w-20 h-13 flex p-0" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Mi3L School</span>
                </Link>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-900 border-gray-900">
                        <li>
                            <Link to="/" className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 text-white md:hover:text-orange-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent" aria-current="page">Home</Link>
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
                                </ul>
                            )}
                        </li>
                        <li 
                            onMouseEnter={() => handleMouseEnter(setAchievementsDropdownOpen)} 
                            onMouseLeave={() => handleMouseLeave(setAchievementsDropdownOpen)} 
                            className="relative"
                        >
                            <Link to="/achievements" className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 text-white md:hover:text-orange-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
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
                                    <li><Link to="/teams/timeline" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 text-white hover:bg-gray-700">Timeline</Link></li>
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
                    </ul>
                </div>
            </div>
        </nav>
    );
}
