import "./buttons.css";
import { useNavigate } from "react-router-dom";
import coach1 from "../images/coaches/coach1.jpeg";
import coach2 from "../images/coaches/coach2.jpeg";
import coach3 from "../images/coaches/coach3.jpeg";
import coach4 from "../images/coaches/coach4.jpeg";
import teamA_logo from "../images/teams/2055A_logo.png";
import teamA_photo from "../images/teams/2055a_team.jpg";
import teamX_logo from "../images/teams/2055X_logo.webp";
import teamX_photo from "../images/teams/2055X.JPG";
import teamC_logo from "../images/teams/2055C_logo.png"; // adjust filename if different
import teamC_photo from "../images/teams/2055c_team.jpg";

const About = () => {
  const navigate = useNavigate();

  const coaches = [
    { name: "Chairmaine", title: "Head Coach", img: coach1 },
    { name: "Connor", title: "Coach/Instructor", img: coach2 },
    { name: "Jason", title: "Mentor/Instructor", img: coach3 },
    { name: "Edison", title: "Mentor/Instructor", img: coach4 },
  ];

  const teams = [
    {
      id: "2055A",
      name: "2055A",
      level: "High School Team",
      logo: teamA_logo,
      photo: teamA_photo,
      link: "/teams/2055A",
    },
    {
      id: "2055X",
      name: "2055X",
      level: "Middle School Team",
      logo: teamX_logo,
      photo: teamX_photo,
      link: "/teams/2055X",
    },
    {
      id: "2055C",
      name: "2055C",
      level: "All-Girls Team",
      logo: teamC_logo,
      photo: teamC_photo,
      link: "/teams/2055C",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-6xl font-bold text-center mb-4">About Us</h1>

      <div className="max-w-2xl mx-auto p-6 bg-white flex justify-between mb-8">
        <button className="button-2" onClick={() => navigate("/teams")}>
          Achievements
        </button>
        <button className="button-2" onClick={() => navigate("/teams/timeline")}>
          History
        </button>
        <button className="button-2" onClick={() => navigate("/contact")}>Contact Us</button>
      </div>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold mb-6 text-center">Meet Our Coaches</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-start">
          {coaches.map((c, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <img
                src={c.img}
                alt={c.name}
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mb-4 shadow"
              />
              <div className="font-semibold text-lg">{c.name}</div>
              <div className="text-sm text-gray-600">{c.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Teams section */}
      <section className="bg-white p-6 rounded-lg shadow-sm mt-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Teams</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teams.map((t) => (
            <div key={t.id} className="border rounded-lg overflow-hidden">
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="font-bold text-lg">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.level}</div>
                </div>
                <img src={t.logo} alt={`${t.name} logo`} className="w-16 h-16 object-contain" />
              </div>

              <div className="h-48 md:h-56 overflow-hidden">
                <img
                  src={t.photo}
                  alt={`${t.name} team`}
                  className={`w-full h-full object-cover ${t.id === "2055C" ? "object-top" : "object-center"}`}
                />
              </div>

              <div className="p-4 flex justify-between items-center">
                <button className="button-2" onClick={() => navigate(t.link)}>
                  View Team
                </button>
                <a href={t.link} className="text-sm text-blue-600 underline">Open</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;