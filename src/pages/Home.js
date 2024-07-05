import React from 'react';
import "./Home.css"
import bg from '../images/background.jpg';
import im1 from '../images/im1.png';
import im2 from '../images/im2.png';
import im3 from '../images/im3.png';
import im4 from '../images/im4.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="font-mono">
             <div className="hero" id='home'>
                <div className="blurry-background">
                    <img className="w-full" src={bg} alt=""></img>
                    <div className="hero-content">
                        
                    <button className="button-learn-more text-4xl absolute top-10 md:relative md:bottom-70">
                        Learn More!
                    </button>
                    </div>
                </div>
                
            </div>
            <div className='text-center mt-10 text-4xl font-bold'>My Life Long Learning</div>
            <div className='text-center mt-3 text-xl'>Join our World Class VEX Robotics Team Today!</div>
            <div className='body1 flex mt-10'>
                <div>
                    <div className='mx-10 mt-3 font-bold text-3xl'>Our Mission</div>
                    <div className='mx-10 mt-3 text-lg'>Our mission is to provide a world-class robotics education to students of all ages. We strive to provide a safe, inclusive, and fun environment for students to learn and grow.</div>
                </div>
                <img src={bg} className='w-1/2 mx-5 rounded-lg' alt=''></img>
            </div>
            <div className='body2 flex mt-10'>
                <img src={bg} className='w-1/3 mx-5 rounded-lg' alt=''></img>
                <div className=''>
                    <div className=' mx-10 mt-3 font-bold text-3xl'>Our Values</div>
                    <div className='mx-10 mt-3 text-lg '>Our mission is to provide a world-class robotics education to students of all ages. We strive to provide a safe, inclusive, and fun environment for students to learn and grow.</div>
                </div>
            </div>
            <div className='body3 flex mt-10'>
                <div className='relative w-1/3 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-75'>
                    <img src={im1} className='w-full rounded-lg blur-sm object-cover h-96' alt='' />
                    <div className='font-bold absolute inset-0 flex items-center justify-center z-40 text-white text-4xl'>
                        Blog Posts
                    </div>
                </div>
                <div onClick={()=> navigate('/courses')} className='relative w-1/3 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-75'>
                    <img src={im2} className='w-full rounded-lg blur-sm object-cover h-96' alt='' />
                    <div className='font-bold absolute inset-0 flex items-center justify-center z-40 text-white text-4xl'>
                        Our Courses
                    </div>
                </div>
                <div className='relative w-1/3 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-75'>
                    <img src={im3} className='w-full rounded-lg blur-sm object-cover h-96' alt='' />
                    <div className='font-bold absolute inset-0 flex items-center justify-center z-40 text-white text-4xl'>
                        Our Team
                    </div>
                </div>
            </div>
        </div>
    )
}