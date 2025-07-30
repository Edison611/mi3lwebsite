import { useState, useEffect } from "react";
import summercourse from '../../images/summercourse.jpeg'

const handleYTClick = () => {
    window.open('https://youtu.be/nitDt76IX3k', '_blank', 'noopener,noreferrer');
  };

const handleImgClick = () => {
    window.open(' https://forms.gle/SwSXMds9dLMcsFZj7', '_blank', 'noopener,noreferrer');
};

const paymentClick = () => {
    window.open('https://www.zeffy.com/en-CA/ticketing/v5rc-summer-course--2025', '_blank', 'noopener,noreferrer');
}

export default function SummerCourse() {
    
    return (
        <div className='flex flex-col items-center space-y-6'>
            <h1 className='text-center font-bold text-5xl mt-8'>2025 Summer Course</h1>
            <div className='text-center px-6'>
                <p>
                    Mi3L School is offering summer courses for middle and high schoolers to learn V5 robotics and enjoy STEM in a practical and hands on experience. We'd also like to recruit a few new members to join our high school and middle school teams. Small classes, groups are seperated by age, and all supplies and parts are provided. Suitable for grades 5-11, no experience required.

                </p>

                <p>
                    Location: 2A-1453 Cornwall Rd Oakville 
                </p>

            </div>
            <button 
        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'
        onClick={handleImgClick} // Add your onClick handler
    >
        Reserve a Spot
    </button>
            <img className='cursor-pointer' src={summercourse} onClick={handleImgClick} />
        <footer>
        <button 
        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'
        onClick={paymentClick}
        
    >
        Make a payment
    </button>
        </footer>
        </div>
    )
}