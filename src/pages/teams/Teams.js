import React from 'react';
import { useNavigate } from 'react-router-dom';

const Teams = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-6xl font-bold text-center mb-8">Our Teams</h1>
      <div className="space-y-6">
        <div className="team-section">
          <h2 className="text-2xl font-semibold mb-2">2055A | Capybaras</h2>
          <p className="mb-4">Our High School VRC team that is competing from 2022-2025</p>
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => navigate('/teams/2055A')}
          >
            Learn More
          </button>
        </div>
        <div className="team-section">
          <h2 className="text-2xl font-semibold mb-2">2055B | Coconut Doggies</h2>
          <p className="mb-4">Our Middle School VRC team that competed from 2022-2023</p>
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => navigate('/teams/2055B')}
          >
            Learn More
          </button>
        </div>
        <div className="team-section">
          <h2 className="text-2xl font-semibold mb-2">2055X | Red Pandas</h2>
          <p className="mb-4">Our Middle School VRC team that is competing from 2023-2025</p>
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => navigate('/teams/2055X')}
          >
            Learn More
          </button>
        </div>
        <div className="team-section">
          <h2 className="text-2xl font-semibold mb-2">Timeline</h2>
          <p className="mb-4">View a timeline of all that has happened</p>
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => navigate('/teams/timeline')}
          >
            Learn More
          </button>
        </div>
        <div className="team-section">
          <h2 className="text-2xl font-semibold mb-2">Achievements</h2>
          <p className="mb-4">View all of our achievements!</p>
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => navigate('/teams/achievements')}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teams;
