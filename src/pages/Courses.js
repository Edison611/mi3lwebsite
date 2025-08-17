import "./buttons.css"
import { useNavigate } from "react-router-dom";
const Courses = () => {
    const navigate = useNavigate();
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-6xl font-bold text-center mb-8">Programs</h1>
        <p className="text-lg leading-relaxed">We offer a range of programs and courses for all grade levels. Please refer to the list below to view the current programs that we offer.</p>
        
        <div className="max-w-2xl mx-auto p-6 bg-white">
          <h2 className="text-xl font-semibold mb-2">Camp</h2>
          <div className="flex justify-between space-x-4 mb-6">
            <button className="button-2 px-6 py-3" onClick={() => navigate("/programs/fllSummerCamp")}>FLL Robotics Summer Camp</button>
            <button className="button-2 px-6 py-3" onClick={() => navigate("/programs/virtualskills")}>Virtual Skills Summer Camp</button>
          </div>
          
          <h2 className="text-xl font-semibold mb-2">Workshop</h2>
          <div className="flex justify-between space-x-4 mb-6">
            <button className="button-2 px-6 py-3" onClick={() => navigate("/programs/iqWorkshop")}>IQ Summer Workshop</button>
            <button className="button-2 px-6 py-3" onClick={() => navigate("/programs/speakup")}>Speak up! Workshop</button>
          </div>
          
          <h2 className="text-xl font-semibold mb-2">Course</h2>
          <div className="flex justify-between space-x-4">
            <button className="button-2 px-6 py-3" onClick={() => navigate("/programs/online")}>Online Courses</button>
            <button className="button-2 px-6 py-3" onClick={() => navigate("/programs/SummerCourse")}>2025 Summer Course</button>
          </div>
        </div>
      </div>
    );
};
export default Courses;