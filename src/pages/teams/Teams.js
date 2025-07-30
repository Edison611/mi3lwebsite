import React from 'react';
import aiTeamPhoto from '../../images/teams/ai_team.jpg';
import team2055aPhoto from '../../images/teams/2055a_team.jpg';
import team2055xPhoto from '../../images/teams/2055x_team.jpg';
import vexLogo from '../../images/vex_robotics_logo.png';

const Achievements = () => {
  const teams = [
    {
      id: 'ai',
      name: 'VEX AI Team',
      number: '2055A',
      photo: aiTeamPhoto,
      achievements: [
        'Skills Champions @ VEX AI Worlds 2024',
        'Autonomous Excellence Award @ National Finals',
        'Innovation Award @ AI Robotics Summit'
      ]
    },
    {
      id: '2055a',
      name: 'VEX VRC Team',
      number: '2055A',
      photo: team2055aPhoto,
      achievements: [
        'Create Award @ VRC Worlds 2024',
        'Excellence Award @ Brampton Regional',
        'Tournament Champions @ Brampton Regional',
        '3× Think Award',
        'Sportsmanship Award @ Hollywood Signature Event',
        'Skills Champion @ Bristol Signature Event'
      ]
    },
    {
      id: '2055x',
      name: 'VEX VRC Team',
      number: '2055X',
      photo: team2055xPhoto,
      achievements: [
        'Design Award @ State Championship',
        'Tournament Finalists @ Regional Qualifier',
        'Robot Skills Finalists @ Signature Event'
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
          <p className="mt-4 text-xl text-gray-600">
            Celebrating our successes in the 2023-2024 season
          </p>
        </div>

        <div className="space-y-20">
          {teams.map((team) => (
            <div key={team.id} className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <img
                    className="h-full w-full object-cover md:h-full md:w-full"
                    src={team.photo}
                    alt={`${team.name} ${team.number}`}
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                    {team.name}
                  </div>
                  <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    Team {team.number}
                  </h2>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      2023-2024 Season Highlights:
                    </h3>
                    <ul className="space-y-3">
                      {team.achievements.map((achievement, index) => (
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

        <div className="mt-16 text-center">
          <p className="text-gray-500">
            * All achievements from the current competition season
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;