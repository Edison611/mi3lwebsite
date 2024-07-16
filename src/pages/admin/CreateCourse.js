import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminCourseTemplate from "./AdminCourseTemplate";

const Dropdown = ({ title, content, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown relative inline-block text-left">
            <button
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={toggleDropdown}
            >
                {title}
                <svg
                    className={`-mr-1 ml-2 h-5 w-5 transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 01.707.293l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414-1.414l5-5A1 1 0 0110 3z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            {isOpen && (
                <ul className="dropdown-menu absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {content.map((item, index) => (
                        <li
                            key={index}
                            className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white"
                            onClick={() => onSelect(item)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};



const Createcourses = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [price_for_lesson, setPriceForLesson] = useState(0);
    const [ongoing, setOngoing] = useState(false);

    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [teachers, setTeachers] = useState("");

    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const [content, setContent] = useState([]);


    useEffect (() => {
        if (!selectedCourse) {
            return;
        }
        fetch("https://mi3lwebsite-api.vercel.app/course-info", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({course_id: selectedCourse.course_id}),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setContent(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            })
    }, [selectedCourse])

    function handleLessonSubmit() {
        if (!date || !description || !teachers) {
            alert("Please fill out all fields");
            return;
        }
        const data = {
            course_id: selectedCourse.course_id,
            date: date,
            description: description,
            teachers: teachers,
        };
        fetch("https://mi3lwebsite-api.vercel.app/add-lesson", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => console.log(response))
            .catch((error) => {
                console.error("Error:", error);
            })
    }   

    function handleCourseSubmit() {
        if (!name || !price || !price_for_lesson) {
            alert("Please fill out all fields");
            return;
        }
        const data = {
            name: name,
            price: price,
            price_for_lesson: price_for_lesson,
            ongoing: ongoing
        };
        fetch("http://localhost:5000/add-course", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            })
    }   

    useEffect(() => {
        fetch("http://localhost:5000/courses")
            .then((response) => response.json())
            .then((data) => {
                setCourses(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            })
    }, [])

    console.log(courses);
    console.log(selectedCourse)

    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Add Courses </h1>
        <div className="flex">
            <div className="justify-center w-24">Name:</div>
            <textarea
                className="border border-gray-300 p-2 mx-10"
                rows="1"
                cols="30"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
        </div>
        <div className="flex">
            <div className="justify-center w-24">Total Price:</div>
            <input
                className="border border-gray-300 p-2 mx-10"
                rows="1"
                cols="30"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
            />
        </div>
        <div className="flex">
            <div className="justify-center w-24">Price for One Lesson:</div>
            <input
                className="border border-gray-300 p-2 mx-10"
                rows="1"
                cols="30"
                value={price_for_lesson}
                onChange={(event) => setPriceForLesson(event.target.value)}
            />
        </div>
        <div className="mb-10 flex">
            <div className="justify-center w-24">Ongoing</div>
            <input
                type="checkbox"
                className="border border-gray-300 p-2 mx-10"
                rows="1"
                cols="30"
                value={ongoing}
                onChange={(event) => setOngoing(event.target.value)}
            />
        </div>
        <button className="button-2 my-10" onClick={handleCourseSubmit}>Submit</button>
        <h1 className="text-3xl font-bold text-center mb-8">Add Lessons </h1>
        <Dropdown
                className="mt-10"
                title="Select Course"
                content={courses}
                onSelect={(course) => setSelectedCourse(course)}
            />
        {selectedCourse && (
                <div className="mt-10">
                    <h2 className="mb-10 text-2xl font-bold">Add Lesson to {selectedCourse.name}</h2>
                    <div className="flex">
                        <div className="justify-center w-24">Date (YYYY-MM-DD):</div>
                        <textarea
                            className="border border-gray-300 p-2 mx-10"
                            rows="1"
                            cols="30"
                            value={date}
                            onChange={(event) => setDate(event.target.value)}
                        />
                    </div>
                    <div className="flex">
                        <div className="justify-center w-24">Description:</div>
                        <textarea
                            className="border border-gray-300 p-2 mx-10"
                            rows="3"
                            cols="30"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>
                    <div className="mb-10 flex">
                        <div className="justify-center w-24">Teachers:</div>
                        <textarea
                            className="border border-gray-300 p-2 mx-10"
                            rows="1"
                            cols="30"
                            value={teachers}
                            onChange={(event) => setTeachers(event.target.value)}
                        />
                    </div>
                    <button className="button-2 mt-10" onClick={handleLessonSubmit}>Submit</button>
                    <h1 className="text-3xl font-bold text-center mb-8">Preview </h1>
                    <hr></hr>
                    
                </div>
            )}
            {content.length > 0 && selectedCourse && <AdminCourseTemplate title={"Title"} description={"Description"} content={content} link={"Link"}/>}
      </div>
    );
  };
  export default Createcourses;