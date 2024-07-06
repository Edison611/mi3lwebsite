import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Createcourses = () => {
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [teachers, setTeachers] = useState("");
    const [price, setPrice] = useState(0);
    const [price_for_lesson, setPriceForLesson] = useState(0);

    function handleSubmit() {
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
        fetch("http://localhost:3001/add", {
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
        <button className="border border-gray-900 mt-10" onClick={handleSubmit}>Submit</button>
      </div>
    );
  };
  export default Createcourses;