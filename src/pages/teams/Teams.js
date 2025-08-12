import React from 'react';
import aiTeamPhoto from '../../images/teams/ai_team.jpg';
import team2055aPhoto from '../../images/teams/2055a_team.jpg';
import team2055xPhoto from '../../images/teams/2055x_team.webp';
import vexLogo from '../../images/vex_robotics_logo.png';

const Achievements = () => {
  const teams = [
    
    {
      id: '2055a',
      name: 'VEX VRC Team',
      number: '2055A',
      photo: team2055aPhoto,
      achievements23: [
        'Create Award @ VRC Worlds 2024',
        'Excellence Award @ Brampton Regional',
        'Tournament Champions @ Brampton Regional',
        '3× Think Award',
        'Sportsmanship Award @ Hollywood Signature Event',
        'Skills Champion @ Bristol Signature Event'
      ],
      achievements24: [
        'Think Award @ Riverbots Signature Event',
        'Design Award @ Glenforest Qualifier',
        'Think Award @ Highlander Signature Event'
      ]
    },
    {
      id: '2055x',
      name: 'VEX VRC Team',
      number: '2055X',
      photo: team2055xPhoto,
      achievements23: [
        'Design Award @ State Championship',
        'Tournament Finalists @ Regional Qualifier',
        'Robot Skills Finalists @ Signature Event'
      ],
      achievements24: [
        'Design Award @ VRC Worlds 2025',
        'Judges Award @ Gateway Signature Event',
        'Design Award @ Riverbots Signature Event',
        'Innovate Award @ St. Catharines Qualifier'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img src={vexLogo} alt="VEX Robotics Logo" className="h-16" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Team Achievements
          </h1>
        </div>

        <div className="space-y-20">
          {teams.map((team) => (
            <div key={team.id} className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-7/12 bg-white flex items-center">
                  <img
                    className="w-full h-[400px] object-contain"
                    src={team.photo}
                    alt={`${team.name} ${team.number}`}
                  />
                </div>
                <div className="p-8 md:w-5/12">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                    {team.name}
                  </div>
                  <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    Team {team.number}
                  </h2>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      2024-2025 Season Highlights:
                    </h3>
                    <ul className="space-y-3">
                      {team.achievements24.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-3 text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                   <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      2023-2024 Season Highlights:
                    </h3>
                    <ul className="space-y-3">
                      {team.achievements23.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-3 text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;