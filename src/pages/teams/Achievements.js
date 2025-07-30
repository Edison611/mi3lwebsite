import { useState } from 'react';
import logo2 from '../../images/logo2.png';
import logo3 from '../../images/logo3.jpg';

const achievements = {
    "2055A": {
        2020: [
            "Excellence Award @ Ontario VEX Robotics",
            "Design Award - Regional Finals"
        ],
        2021: [
            "Tournament Champions - GTA South Qualifier",
            "Judges Award - Ontario Provincials"
        ],
        2023: [
            "Skills Champions @ VEX AI Worlds",
            "Create Award @ Worlds",
            "Excellence Award @ Brampton Regional",
            "Tournament Champions @ Brampton Regional",
            "3× Think Award",
            "Sportsmanship Award @ Hollywood Signature Event",
            "Skills Champion @ Bristol Signature Event"
        ]
    },
    "2055X": {
        2022: [
            "Tournament Finalists - Central Ontario",
            "Robot Skills Champion - VEX IQ League"
        ],
        2023: [
            "Innovate Award - Ontario East",
            "Excellence Award - National Qualifiers"
        ]
    }
};

const Achievements = () => {
    const [selectedTeam, setSelectedTeam] = useState("2055A");
    const [openYears, setOpenYears] = useState({});

    const toggleYear = (year) => {
        setOpenYears(prev => ({
            ...prev,
            [year]: !prev[year]
        }));
    };

    return (
        <section className="max-w-6xl mx-auto p-8">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Team Achievements</h1>
                <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </header>

            <div className="flex justify-center mb-8 space-x-6">
                {["2055A", "2055X"].map(team => (
                    <button
                        key={team}
                        onClick={() => setSelectedTeam(team)}
                        className={`px-6 py-2 font-semibold border rounded-full transition ${
                            selectedTeam === team
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
                        }`}
                    >
                        Team {team}
                    </button>
                ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 w-full">
                    {Object.keys(achievements[selectedTeam])
                        .sort((a, b) => b - a)
                        .map((year) => (
                            <div key={year} className="mb-6 border-l-4 border-blue-500 pl-4">
                                <h2
                                    onClick={() => toggleYear(year)}
                                    className="text-2xl font-semibold text-gray-700 cursor-pointer flex items-center justify-between pr-4"
                                >
                                    {year}
                                    <span className="text-blue-600 text-xl">
                                        {openYears[year] ? '−' : '+'}
                                    </span>
                                </h2>
                                {openYears[year] && (
                                    <ul className="mt-3 space-y-2 text-lg text-gray-600">
                                        {achievements[selectedTeam][year].map((item, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="text-blue-500 mr-2">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                </div>

            <div className="flex-1 flex justify-center">
                <img 
                    src={selectedTeam === "2055A" ? logo2 : logo3} 
                    alt={selectedTeam === "2055A" ? "2055A Team Logo" : "2055X Team Logo"} 
                    className="max-w-xs md:max-w-md object-contain"
                />
            </div>
            </div>
        </section>
    );
};

export default Achievements;
