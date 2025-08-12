import "./buttons.css"
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-6xl font-bold text-center mb-4">About Us  </h1>
        {/* <h2 className="text-6l text-center mb-10">VEX 2055</h2> */}
        <div className="max-w-2xl mx-auto p-6 bg-white flex justify-between">
          <button className="button-2" onClick={() => navigate("/teams")}>Achievements</button>
          <button className="button-2" onClick={() => navigate("/teams/timeline")}>History</button>
          <button className="button-2" onClick={() => navigate("/contact")}>Contact Us</button>
        </div>
      </div>
    );
  };
  export default About;