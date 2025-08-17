import { useState, useEffect } from "react";
import Img1 from '../../images/roboticsworkshop1.jpg'
import Img2 from '../../images/roboticsworkshop2.jpg'



export default function RoboticsWorkshops() {
    return (
        <div className='flex flex-col items-center space-y-6'>
            <h1 className='text-center font-bold text-5xl mt-8'> Robotics & STEM Workshops</h1>
            <div className='text-center px-6'>
                <p className='inline'>
                Welcome to join us in Oakville and Mississauga for two exciting Free Robotics & STEM Workshops hosted by V5RC 2055A/X robotics, and Aerial drone teams from Mi3L School! Whether you’re just starting out or already experienced in robotics, this workshop is the perfect opportunity to explore, create, and have fun while learning. Participants will get hands-on experience with building and programming robots, racing them, flying drones through obstacle courses, and trying creative STEM challenges.
                </p>
                <p>
                    Oakville Library Central Branch (Aug 16, 1-4pm), Burnhanthorpe Community Centre (Aug 22, 6-8pm)
                </p>
                <p>
                 🔗: Scan the QR code to register 
                </p>
            </div>
            <img className='cursor-pointer max-w-md h-auto' src={Img1} />
            <img className='cursor-pointer max-w-md h-auto' src={Img2} />
        {/* Slideshow Section */}
        <footer>

        </footer>
        </div>
    )
}