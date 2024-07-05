import "./buttons.css"
import { useNavigate } from "react-router-dom";
const Courses = () => {
    const navigate = useNavigate();
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-6xl font-bold text-center mb-8">Courses</h1>
        {/* <img src={image} alt="Example" className="w-full h-auto mb-8 rounded-lg" /> */}
        <p className="text-lg leading-relaxed">We offer a range of courses for all grade levels. Please refer to the list below to view the current courses that we offer.</p>
        <div className="max-w-2xl mx-auto p-6 bg-white flex justify-between">
            <button className="button-2" onClick={() => navigate("/courses/online")}>Online Courses</button>
            <button className="button-2" onClick={() => navigate("/courses/summer-2024")}>Summer 2024 Courses</button>
        </div>
      </div>
    );
  };
  export default Courses;