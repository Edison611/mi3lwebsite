import CourseTemplate from "./CourseTemplate";

export default function Summer2024Courses() {
    const description = "This is a course for students who want to learn about robotics and programming. Students will learn how to build and program robots using VEX Robotics kits. The course will cover topics such as mechanical design, programming, and problem-solving where students will work in teams to design, build, and program robots to complete various challenges to help students develop their skills and most importantly have fun! Classes are from 1PM - 4PM at 130 Aintree Terrace, Oakville, ON. Please fill out the form to signup: "
    const content = [
        {
            date: "June 3, 2024",
            desc: "Knowing Vex Mechanical parts, build drive train",
            teacher: "Connor"
        },
        {
            date: "June 4, 2024",
            desc: "",
            teacher: "Connor"
        },
    ]
    return (
        <div>
            <CourseTemplate title="Summer 2024" description={description} content={content} />
        </div>
    )
}