import React from 'react';
import "./Home.css"
import bg from '../images/home1.png';
import bg2 from '../images/home2.jpg';
import bg3 from '../images/home3.png';
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
                <div className="blurry-background relative">
                    <img className="w-full h-64 md:h-96 object-cover blur-sm" src={bg} alt="" />
                    <div className="hero-content absolute inset-0 flex items-center justify-center">
                        <button className="button-learn-more text-xl md:text-4xl">
                            <a href='#mi3l'>Learn More!</a>
                        </button>
                    </div>
                </div>
            </div>
            <div id='mi3l' className='text-center mt-6 md:mt-10 text-2xl md:text-4xl font-bold'>My Life Long Learning</div>
            <div className='text-center mt-3 text-lg md:text-xl'>Join our World Class VEX Robotics Team Today!</div>
            <div className='body1 flex flex-col md:flex-row mt-6 md:mt-10'>
                <div className="md:w-1/2 px-4">
                    <div className='mt-3 font-bold text-2xl md:text-3xl'>Our Mission</div>
                    <div className='mt-3 text-base md:text-lg'>
                        Our mission is to provide a world-class robotics education to students of all ages. We strive to provide a safe, inclusive, and fun environment for students to learn and grow. Our goal is to inspire curiosity, creativity, and a lifelong passion for technology and innovation. Through hands-on learning and collaborative projects, we aim to equip students with the critical thinking, problem-solving, and teamwork skills necessary for success.
                    </div>
                </div>
                <img src={bg2} className='w-full md:w-1/2 mt-4 md:mt-0 rounded-lg' alt='' />
            </div>
            <div className='body2 flex flex-col md:flex-row mt-6 md:mt-10'>
                <img src={bg3} className='w-full md:w-1/3 mt-4 md:mt-0 rounded-lg' alt='' />
                <div className='md:w-2/3 px-4'>
                    <div className='mt-3 font-bold text-2xl md:text-3xl'>Our Values</div>
                    <div className='mt-3 text-base md:text-lg'>
                        Our values embrace inclusivity and diversity, ensuring our programs are accessible and welcoming to all students, regardless of background or ability. Collaboration and teamwork are paramount, fostering mutual respect and the value of working together towards common goals. Upholding the highest standards of integrity and respect, we ensure all community interactions are conducted with honesty and kindness. Finally, we strive to empower our students, building their confidence and equipping them with the skills necessary for success.
                    </div>
                </div>
            </div>
            <div className='body3 flex flex-wrap justify-center mt-6 md:mt-10'>
                <div onClick={() => window.location.href = 'https://2055vrc.live/'} className='relative w-full md:w-1/3 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-75 mt-4'>
                    <img src={im1} className='w-full rounded-lg blur-sm object-cover h-48 md:h-96' alt='' />
                    <div className='font-bold absolute inset-0 flex items-center justify-center z-40 text-white text-2xl md:text-4xl'>
                        Blog Posts
                    </div>
                </div>
                <div onClick={() => navigate('/courses')} className='relative w-full md:w-1/3 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-75 mt-4'>
                    <img src={im2} className='w-full rounded-lg blur-sm object-cover h-48 md:h-96' alt='' />
                    <div className='font-bold absolute inset-0 flex items-center justify-center z-40 text-white text-2xl md:text-4xl'>
                        Our Courses
                    </div>
                </div>
                <div onClick={() => navigate('/teams')} className='relative w-full md:w-1/3 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-75 mt-4'>
                    <img src={im3} className='w-full rounded-lg blur-sm object-cover h-48 md:h-96' alt='' />
                    <div className='font-bold absolute inset-0 flex items-center justify-center z-40 text-white text-2xl md:text-4xl'>
                        Our Team
                    </div>
                </div>
            </div>
            <div className='relative mt-10'>
                <img src={im4} className='w-full object-cover h-48 md:h-96 blur-sm' alt='' />
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='w-64 bg-gray-800 bg-opacity-70 p-4 rounded-lg'>
                        <p className='text-center text-lg md:text-xl text-white'>"The cure for boredom is curiosity. There is no cure for curiosity."</p>
                    </div>
                </div>
                <p className='absolute bottom-0 left-0 right-0 text-center text-white text-lg md:text-xl mb-10'>- Dorothy Parker</p>
            </div>
        </div>
    )
}
