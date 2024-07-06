import "../buttons.css"
import { useNavigate } from "react-router-dom";
const OnlineCourses = () => {
    const navigate = useNavigate();
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-6xl font-bold text-center mb-8">Online Courses</h1>
        
        <div className="max-w-2xl mx-auto p-6 bg-white flex justify-between">
            <button className="button-2" onClick={() => navigate("/courses/online/full-vrc-guide")}>The Full VRC Programming Guide</button>
            {/* <button className="button-2" onClick={() => navigate("/courses/summer-2024")}>Summer 2024 Courses</button> */}
        </div>
      </div>
    );
  };
  export default OnlineCourses;