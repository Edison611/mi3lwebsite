import { useState } from "react";
import DroneCourseImg from '../../images/DroneCourseImg.jpg'

const handleYTClick = () => {
    window.open('https://youtu.be/nitDt76IX3k', '_blank', 'noopener,noreferrer');
  };

const handleImgClick = () => {
    window.open('https://forms.gle/EbAEvuaYvkpckJJM6', '_blank', 'noopener,noreferrer');
}

export default function AerialDroneCourses() {

    
    return (
        <div className='flex flex-col items-center space-y-6'>
            <h1 className='text-center font-bold text-5xl'>Aerial Drone Course</h1>
            <div className='text-center px-6'>
                <p className='inline'>
                    See your code come to life and take flight with our curriculum! Mi3L School offering community great STEM learning opportunity: first Aerial drone course in for Grd 6-12!
                </p>
                <a 
                    onClick={handleYTClick}
                    className='inline text-blue-500 underline cursor-pointer'
                >
                    https://youtu.be/nitDt76IX3k
                </a>
                <p className='inline'>
                    &nbsp;Programming in Python, 7 sensors, AI and fly tricks, you will learn all these in our 4 levels of courses in 4 months, beginner, intermediate, advanced and expert. Taught by aerospace engineer with 20 years experience. Small class, every 2-4 students share one drone. 
                </p>
            </div>
            <button 
        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'
        onClick={handleImgClick} // Add your onClick handler
    >
        Reserve a Spot
    </button>
            <img className='cursor-pointer' src={DroneCourseImg} onClick={handleImgClick} />
        </div>
    )
}