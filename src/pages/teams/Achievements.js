import vrc_logo from '../../images/vex_robotics_logo.png';
const Achievements = () => {
    // Connect to database so that it's easy to update the website
    return (
      <div className="mx-auto p-6">
        <h1 className="text-6xl font-bold text-center mb-8">Achievements </h1>
        <div className='mx-10 flex'>
            <div>
            <p className="mx-10 text-xl font-bold">2023-2024 Season:</p>
            <ul className='mx-10 text-xl'>
                <li className='my-2'>VEX AI Team 2055A: Skills Champions @ VEX AI Worlds</li>
                <li className='my-2'>VEX AI Team 2055A: Skills Champions @ VEX AI Worlds</li>
            </ul>
            </div>
            <img src={vrc_logo} alt=''></img>
        </div>
      </div>
    );
  };
  export default Achievements;