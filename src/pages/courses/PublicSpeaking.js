import { useState, useEffect } from "react";
import SpeakupImg from '../../images/PublicSpeaking.webp'

// const handleYTClick = () => {
//     window.open('https://youtu.be/nitDt76IX3k', '_blank', 'noopener,noreferrer');
//   };

const handleImgClick = () => {
    window.open(' https://forms.gle/gG2uFLv28EXK5Z61A', '_blank', 'noopener,noreferrer');
};

const paymentClick = () => {
    window.open('https://www.zeffy.com/en-CA/ticketing/mi3l-school-summer-public-speaker-workshop--2025', '_blank', 'noopener,noreferrer');
}
const slideImages = [
    '../../images/aerial/1.jpg',
    '../../images/aerial/2.jpg',
    '../../images/aerial/3.jpg',
    '../../images/aerial/4.jpg',
    // Add more image paths as needed
];
export default function PublicSpeaking() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slideImages.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className='flex flex-col items-center space-y-6'>
            <h1 className='text-center font-bold text-5xl mt-8'>Speak up! Workshop</h1>
            <div className='text-center px-6'>
                <p className='inline'>
                Mi3L School is offering a public speaking workshop for ages 9-14!                
                </p>
                <p>
                 Aug 11th, 13th, 15th, 17th: 7-9pm
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
            <img className='cursor-pointer' src={SpeakupImg} onClick={handleImgClick} />
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