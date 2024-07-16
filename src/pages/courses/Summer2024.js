import { useState, useEffect } from "react";
import CourseTemplate from "./CourseTemplate";

export default function Summer2024Courses() {
    const [content, setContent] = useState([]);
    const description = "This is a course for students who want to learn about robotics and programming. Students will learn how to build and program robots using VEX Robotics kits. The course will cover topics such as mechanical design, programming, and problem-solving where students will work in teams to design, build, and program robots to complete various challenges to help students develop their skills and most importantly have fun! Classes are from 1PM - 4PM at 130 Aintree Terrace, Oakville, ON. "
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
            })
            .catch((error) => {
                console.error("Error:", error);
            })
    }, [])
    console.log(content)
    
    return (
        <div>
            {content.length>0&& <CourseTemplate title="2055A Capybaras V5 Robotics Summer Course" description={description} content={content} link={"https://docs.google.com/forms/d/e/1FAIpQLScmH8xrI2KK1v63tkxyUTEIAAo_vJDiE67sYw_ijRq2J8WLew/viewform"}/>}
        </div>
    )
}