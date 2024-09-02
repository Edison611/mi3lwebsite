import { useState, useEffect } from "react";
import CourseTemplate from "./CourseTemplate";
import DroneCourseImg from '../../images/DroneCourseImg.jpg'

const handleYTClick = () => {
    window.open('https://youtu.be/nitDt76IX3k', '_blank', 'noopener,noreferrer');
  };

const handleImgClick = () => {
    window.open('https://forms.gle/EbAEvuaYvkpckJJM6', '_blank', 'noopener,noreferrer');
}

export default function AerialDroneCourses() {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState([]);
    useEffect (() => {
        fetch("https://mi3lwebsite-api.vercel.app/course-info", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({course_id: 1}),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setContent(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            })
    }, [])
    console.log(content)

    if (loading) {
        return <div className="text-6xl font-bold text-center mt-8 mb-8">Loading...</div>;
      }
    
    
    return (
        <div className='flex flex-col items-center space-y-6'>
            <h1 className='text-center font-bold text-5xl'>Arial Drone Course</h1>
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
                    &nbsp;Programming in Python, 7 sensors, AI and fly tricks, you will learn all these in our 4 levels of courses in 4 months, beginner, intermediate, advanced and expert. Taught by aerospace engineer with 20 years experience. Small class, every 2-4 students share one drone. Click on the image below to reserve a spot
                </p>
            </div>
            <img className='cursor-pointer' src={DroneCourseImg} onClick={handleImgClick} />
        </div>
    )
}