import "./buttons.css"
import { useNavigate } from "react-router-dom";
const Courses = () => {
    const navigate = useNavigate();
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-6xl font-bold text-center mb-8">Programs</h1>
        {/* <img src={image} alt="Example" className="w-full h-auto mb-8 rounded-lg" /> */}
        <p className="text-lg leading-relaxed">We offer a range of programs and courses for all grade levels. Please refer to the list below to view the current programs that we offer.</p>
        <div className="max-w-2xl mx-auto p-6 bg-white flex justify-between space-x-4">
            <button className="button-2 px-6 py-3" onClick={() => navigate("/programs/online")}>Online Courses</button>
            <button className="button-2 px-6 py-3" onClick={() => navigate("/programs/fllSummerCamp")}>FLL Robotics Summer Camp</button>
            <button className="button-2 px-6 py-3" onClick={() => navigate("/programs/iqWorkshop")}>IQ Summer Workshop</button>
        </div>
         <div className="max-w-2xl mx-auto p-6 bg-white flex justify-between space-x-4">
            <button className="button-2 px-6 py-3" onClick={() => navigate("/programs/speakup")}>Speak up! Workshop</button>
            <button className="button-2 px-6 py-3" onClick={() => navigate("/programs/virtualskills")}>Virtual Skills Summer Camp</button>            
            <button className="button-2 px-6 py-3" onClick={() => navigate("/programs/SummerCourse")}>2025 Summer Course</button>
          </div>
      </div>
    );
  };
  export default Courses;