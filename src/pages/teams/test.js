
import { useNavigate } from "react-router-dom";

const Test = () => {
    const navigate = useNavigate();
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-6xl font-bold text-center mb-8">Test</h1>
        {/* <img src={image} alt="Example" className="w-full h-auto mb-8 rounded-lg" /> */}
        <p className="text-lg leading-relaxed">We offer a range of courses for all grade levels. Please refer to the list below to view the current courses that we offer.</p>
      </div>
    );
  };
  export default Test;