import { useState, useEffect } from "react";
import DroneCourseImg from '../../images/DroneCourseImg.jpg'

const handleYTClick = () => {
    window.open('https://youtu.be/nitDt76IX3k', '_blank', 'noopener,noreferrer');
  };

const handleImgClick = () => {
    window.open('https://forms.gle/EbAEvuaYvkpckJJM6', '_blank', 'noopener,noreferrer');
};

const paymentClick = () => {
    window.open('https://www.zeffy.com/en-CA/ticketing/4e0adc5f-b2d0-4ced-be41-68f03d5a3f45', '_blank', 'noopener,noreferrer');
}
const slideImages = [
    '../../images/aerial/1.jpg',
    '../../images/aerial/2.jpg',
    '../../images/aerial/3.jpg',
    '../../images/aerial/4.jpg',
    // Add more image paths as needed
];
export default function AerialDroneCourses() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slideImages.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);
    
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
        {/* Slideshow Section */}
        <div className='relative w-full max-w-lg'>
                <img 
                    src={slideImages[currentSlide]} 
                    alt={`Slide ${currentSlide + 1}`} 
                    className='w-full h-auto'
                />
        </div>
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