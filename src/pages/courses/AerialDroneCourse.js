import { useState, useEffect } from "react";
import DroneCourseImg from '../../images/FLLSummerCamp.jpeg'

const handleYTClick = () => {
    window.open('https://youtu.be/nitDt76IX3k', '_blank', 'noopener,noreferrer');
  };

const handleImgClick = () => {
    window.open(' https://forms.gle/EbAEvuaYvkpckJJM6', '_blank', 'noopener,noreferrer');
};

const paymentClick = () => {
    window.open('https://www.zeffy.com/en-CA/ticketing/fll-robotics-summer-camp-aug-2025-grd-3--8', '_blank', 'noopener,noreferrer');
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
            <h1 className='text-center font-bold text-5xl mt-8'> FLL Robotics Summer Camp</h1>
            <div className='text-center px-6'>
                <p className='inline'>
                Mi3L School is offering a Robotics Summer Camp opportunity for Grd 3-8!
                </p>
                <p>
                    &nbsp; Aug 5 - Aug 8, 1pm - 4pm
                </p>
                <p>
                    Location: 2A-1453 Cornwall Rd Oakville 
                </p>

            </div>
            <img className='cursor-pointer max-w-md h-auto' src={DroneCourseImg} />
        {/* Slideshow Section */}
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