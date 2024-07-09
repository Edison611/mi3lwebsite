import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

const Createcourses = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [price_for_lesson, setPriceForLesson] = useState(0);
    const [ongoing, setOngoing] = useState(false);

    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [teachers, setTeachers] = useState("");

    const [courses, setCourses] = useState([]);

    function handleCourseSubmit() {
        if (!date || !description || !teachers || !price || !price_for_lesson) {
            alert("Please fill out all fields");
            return;
        }
        const data = {
            date: date,
            description: description,
            teachers: teachers,
            price: price,
            price_for_lesson: price_for_lesson
        };
        fetch("http://localhost:3001/add-course", {
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

    function handleLessonSubmit() {
        if (!name || !price || !price_for_lesson) {
            alert("Please fill out all fields");
            return;
        }
        const data = {
            name: date,
            price: price,
            price_for_lesson: price_for_lesson,
            ongoing: ongoing
        };
        fetch("http://localhost:3001/add-lesson", {
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

    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-6xl font-bold text-center mb-8">Add Courses </h1>
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
        {/* <div className="flex">
            <div className="justify-center w-24">Date:</div>
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
        <div className="flex">
            <div className="justify-center w-24">Teachers:</div>
            <textarea
                className="border border-gray-300 p-2 mx-10"
                rows="1"
                cols="30"
                value={teachers}
                onChange={(event) => setTeachers(event.target.value)}
            />
        </div> */}
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
        <div className="flex">
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
        <button className="border border-gray-900 mt-10" onClick={handleCourseSubmit}>Submit</button>
            <Dropdown className="mt-10">
                <Dropdown.Toggle className="bg-blue-600 p-2" variant="success" id="dropdown-basic">
                    Dropdown Button ⬇️
                </Dropdown.Toggle>

                <Dropdown.Menu className="mt-5">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <br></br>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
      </div>
    );
  };
  export default Createcourses;